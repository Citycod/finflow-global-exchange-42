import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, CreditCard, Building2, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const depositMethods = [
    {
      id: 'card',
      icon: CreditCard,
      title: 'Debit/Credit Card',
      description: 'Instant deposit',
      fee: 'Free'
    },
    {
      id: 'bank',
      icon: Building2,
      title: 'Bank Transfer',
      description: '1-3 business days',
      fee: 'Free'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Payment',
      description: 'Apple Pay, Google Pay',
      fee: 'Free'
    }
  ];

  const handleDeposit = () => {
    console.log('Depositing:', { amount, method: selectedMethod });
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
        <h1 className="text-2xl font-bold">Deposit Funds</h1>
      </div>

      {/* Amount Input */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2 text-success" />
            Deposit Amount
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-2xl font-bold text-center"
            />
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {['25', '50', '100', '500'].map((quickAmount) => (
              <Button
                key={quickAmount}
                variant="outline"
                size="sm"
                onClick={() => setAmount(quickAmount)}
              >
                ${quickAmount}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Deposit Methods */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Choose Deposit Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {depositMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedMethod === method.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-success">{method.fee}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Deposit Button */}
      <div className="mt-6">
        <Button 
          className="w-full bg-gradient-success hover:opacity-90"
          onClick={handleDeposit}
          disabled={!amount || !selectedMethod}
        >
          Deposit ${amount || '0.00'}
        </Button>
      </div>

      {/* Security Notice */}
      <Card className="mt-4 bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm text-primary">
            🔒 Your deposits are secured with bank-level encryption and are FDIC insured up to $250,000.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Deposit;