import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Banking = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Banking</h1>
        <Button size="icon" variant="outline">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Banking Features Card */}
      <Card className="shadow-card">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Banking Features</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Manage your bank accounts and transfer money worldwide
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <p className="text-primary font-medium">Coming Soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Features List */}
      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">Available Soon</h3>
        
        <div className="space-y-3">
          {[
            {
              title: 'Link Bank Account',
              description: 'Connect your existing bank accounts'
            },
            {
              title: 'Wire Transfers',
              description: 'Send money internationally'
            },
            {
              title: 'Direct Deposits',
              description: 'Receive payments directly'
            },
            {
              title: 'Payment History',
              description: 'Track all your banking transactions'
            }
          ].map((feature, index) => (
            <Card key={index} className="opacity-60">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    Soon
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banking;