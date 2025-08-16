import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Filter, ArrowUpRight, ArrowDownLeft, ArrowRightLeft } from 'lucide-react';

const Transactions = () => {
  const [filter, setFilter] = useState('all');

  const mockTransactions = [
    {
      id: 1,
      type: 'deposit',
      amount: 1000,
      description: 'Bank deposit',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'send',
      amount: -50,
      description: 'Payment to John Doe',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'exchange',
      amount: 0,
      description: 'USD to EUR exchange',
      date: '2024-01-13',
      status: 'completed'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownLeft className="h-4 w-4 text-success" />;
      case 'send':
        return <ArrowUpRight className="h-4 w-4 text-destructive" />;
      case 'exchange':
        return <ArrowRightLeft className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const formatAmount = (amount: number, type: string) => {
    if (type === 'exchange') return 'Exchange';
    const prefix = amount > 0 ? '+' : '';
    return `${prefix}$${Math.abs(amount).toFixed(2)}`;
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button size="icon" variant="outline">
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      {/* Empty State for Coming Soon */}
      <Card className="shadow-card mb-6">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Transaction History</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                View all your transactions and track your money flow
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <p className="text-primary font-medium">No transactions yet</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6">
        {[
          { key: 'all', label: 'All' },
          { key: 'deposit', label: 'Deposits' },
          { key: 'send', label: 'Sent' },
          { key: 'exchange', label: 'Exchange' }
        ].map((tab) => (
          <Button
            key={tab.key}
            variant={filter === tab.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(tab.key)}
            className="flex-1"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Transaction Categories */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Transaction Types</h3>
        
        <div className="grid gap-3">
          {[
            {
              icon: ArrowDownLeft,
              title: 'Deposits',
              description: 'Money received',
              color: 'bg-success'
            },
            {
              icon: ArrowUpRight,
              title: 'Payments',
              description: 'Money sent',
              color: 'bg-destructive'
            },
            {
              icon: ArrowRightLeft,
              title: 'Exchanges',
              description: 'Currency conversions',
              color: 'bg-warning'
            }
          ].map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="opacity-60">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{category.title}</h4>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">$0.00</p>
                      <p className="text-xs text-muted-foreground">This month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
              <Clock className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No recent transactions</p>
            <p className="text-sm text-muted-foreground mt-1">
              Your transaction history will appear here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;