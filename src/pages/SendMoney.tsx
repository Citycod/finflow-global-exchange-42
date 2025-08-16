import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowUpRight, User, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SendMoney = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');

  const handleSend = () => {
    // Handle send money logic here
    console.log('Sending money:', { amount, recipient, note });
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="mr-3"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Send Money</h1>
      </div>

      {/* Send Money Form */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ArrowUpRight className="h-5 w-5 mr-2 text-primary" />
            Transfer Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Recipient */}
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="recipient"
                placeholder="Enter email or phone number"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Note */}
          <div className="space-y-2">
            <Label htmlFor="note">Note (Optional)</Label>
            <Input
              id="note"
              placeholder="What's this for?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <Button 
            className="w-full bg-gradient-primary hover:opacity-90"
            onClick={handleSend}
            disabled={!amount || !recipient}
          >
            Send ${amount || '0.00'}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Recipients */}
      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle>Recent Recipients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No recent recipients</p>
            <p className="text-sm text-muted-foreground mt-1">
              Your recent transfers will appear here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendMoney;