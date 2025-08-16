import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Get user from JWT token
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      throw new Error('Invalid authentication')
    }

    const { recipientEmail, amount, note } = await req.json()

    if (!recipientEmail || !amount || amount <= 0) {
      throw new Error('Invalid recipient email or amount')
    }

    console.log('Processing transaction:', { from: user.email, to: recipientEmail, amount, note })

    // Find recipient by email in profiles table
    const { data: recipientProfile, error: recipientError } = await supabase
      .from('profiles')
      .select('user_id')
      .eq('email', recipientEmail)
      .single()

    if (recipientError || !recipientProfile) {
      throw new Error('Recipient not found')
    }

    // Get sender's account
    const { data: senderAccount, error: senderAccountError } = await supabase
      .from('accounts')
      .select('*')
      .eq('user_id', user.id)
      .eq('account_type', 'checking')
      .single()

    if (senderAccountError || !senderAccount) {
      throw new Error('Sender account not found')
    }

    // Get recipient's account
    const { data: recipientAccount, error: recipientAccountError } = await supabase
      .from('accounts')
      .select('*')
      .eq('user_id', recipientProfile.user_id)
      .eq('account_type', 'checking')
      .single()

    if (recipientAccountError || !recipientAccount) {
      throw new Error('Recipient account not found')
    }

    // Check if sender has sufficient balance
    if (parseFloat(senderAccount.balance) < amount) {
      throw new Error('Insufficient funds')
    }

    // Create transaction record
    const { data: transaction, error: transactionError } = await supabase
      .from('transactions')
      .insert({
        from_user_id: user.id,
        to_user_id: recipientProfile.user_id,
        from_account_id: senderAccount.id,
        to_account_id: recipientAccount.id,
        amount: amount,
        note: note || null,
        status: 'completed'
      })
      .select()
      .single()

    if (transactionError) {
      throw new Error('Failed to create transaction')
    }

    // Update sender's balance
    const newSenderBalance = parseFloat(senderAccount.balance) - amount
    const { error: senderUpdateError } = await supabase
      .from('accounts')
      .update({ balance: newSenderBalance })
      .eq('id', senderAccount.id)

    if (senderUpdateError) {
      throw new Error('Failed to update sender balance')
    }

    // Update recipient's balance
    const newRecipientBalance = parseFloat(recipientAccount.balance) + amount
    const { error: recipientUpdateError } = await supabase
      .from('accounts')
      .update({ balance: newRecipientBalance })
      .eq('id', recipientAccount.id)

    if (recipientUpdateError) {
      throw new Error('Failed to update recipient balance')
    }

    console.log('Transaction completed successfully:', transaction.id)

    return new Response(
      JSON.stringify({ 
        success: true, 
        transaction: transaction,
        message: 'Money sent successfully'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error processing transaction:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})