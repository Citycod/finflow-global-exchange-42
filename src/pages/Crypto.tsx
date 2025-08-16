import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin, Plus, TrendingUp, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Crypto = () => {
  const cryptoFeatures = [
    {
      icon: Bitcoin,
      title: 'Buy Crypto',
      description: 'Purchase cryptocurrencies',
      color: 'bg-crypto'
    },
    {
      icon: TrendingUp,
      title: 'Sell Crypto',
      description: 'Convert crypto to cash',
      color: 'bg-success'
    },
    {
      icon: ArrowRightLeft,
      title: 'Trade',
      description: 'Exchange between currencies',
      color: 'bg-primary'
    },
    {
      icon: ArrowRightLeft,
      title: 'Crypto to Fiat',
      description: 'Convert to traditional currency',
      color: 'bg-warning'
    }
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Crypto</h1>
        <Button size="icon" variant="outline">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Crypto Card */}
      <Card className="shadow-card mb-6">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-crypto/10 rounded-2xl mx-auto flex items-center justify-center">
              <Bitcoin className="h-10 w-10 text-crypto" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Crypto Trading</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Trade cryptocurrencies and manage your crypto wallets
              </p>
            </div>

            <div className="bg-crypto/5 rounded-lg p-4">
              <p className="text-crypto font-medium">Coming Soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crypto Features Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Crypto Features</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {cryptoFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="opacity-60 hover:opacity-80 transition-opacity">
                <CardContent className="p-4">
                  <div className="text-center space-y-3">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl mx-auto flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Popular Cryptocurrencies */}
      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle>Popular Cryptocurrencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Bitcoin', symbol: 'BTC', price: '$0.00', change: '+0.00%' },
              { name: 'Ethereum', symbol: 'ETH', price: '$0.00', change: '+0.00%' },
              { name: 'Binance Coin', symbol: 'BNB', price: '$0.00', change: '+0.00%' },
            ].map((crypto, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-crypto rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{crypto.symbol[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{crypto.name}</p>
                    <p className="text-xs text-muted-foreground">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">{crypto.price}</p>
                  <p className="text-xs text-success">{crypto.change}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Crypto;