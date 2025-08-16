import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bitcoin,
  TrendingUp,
  ArrowUpDown,
  Gift,
  DollarSign,
  Wallet,
  PieChart,
  ShoppingBag
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Trading = () => {
  const navigate = useNavigate();

  const cryptoAssets = [
    { symbol: 'BTC', name: 'Bitcoin', amount: '0.75', value: '$45,231.50', change: '+5.2%', color: 'text-warning' },
    { symbol: 'ETH', name: 'Ethereum', amount: '12.5', value: '$28,750.00', change: '+3.1%', color: 'text-primary' },
    { symbol: 'ADA', name: 'Cardano', amount: '5,000', value: '$2,150.00', change: '-1.8%', color: 'text-destructive' },
    { symbol: 'DOT', name: 'Polkadot', amount: '850', value: '$6,375.00', change: '+7.4%', color: 'text-success' }
  ];

  const tradingActions = [
    {
      icon: TrendingUp,
      label: 'Trade Crypto',
      description: 'Buy and sell cryptocurrencies',
      color: 'bg-primary',
      path: '/crypto'
    },
    {
      icon: Gift,
      label: 'Trade Gift Card',
      description: 'Exchange gift cards',
      color: 'bg-warning',
      path: '/gift-cards'
    },
    {
      icon: ArrowUpDown,
      label: 'Fiat to Crypto',
      description: 'Convert fiat to crypto',
      color: 'bg-success',
      path: '/exchange'
    },
    {
      icon: DollarSign,
      label: 'Sell Crypto',
      description: 'Convert crypto to cash',
      color: 'bg-destructive',
      path: '/sell-crypto'
    },
    {
      icon: Bitcoin,
      label: 'Buy Crypto',
      description: 'Purchase cryptocurrencies',
      color: 'bg-accent',
      path: '/buy-crypto'
    },
    {
      icon: PieChart,
      label: 'Portfolio',
      description: 'View your assets',
      color: 'bg-muted',
      path: '/portfolio'
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Trading</h1>
            <p className="text-white/80 mt-1">Manage your crypto portfolio</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-sm">Username</p>
            <p className="font-semibold">John Doe</p>
          </div>
        </div>
      </div>

      {/* Crypto Balance */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bitcoin className="h-6 w-6 text-warning" />
              <span>Crypto Balance</span>
            </div>
            <Badge variant="secondary">Portfolio</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">₿2.15 BTC</div>
            <div className="text-xl text-muted-foreground">≈ $82,506.50</div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-success">+4.7% (24h)</Badge>
              <Badge variant="outline" className="text-primary">+12.3% (7d)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trading Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Trading Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {tradingActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-hover transition-shadow cursor-pointer"
                onClick={() => navigate(action.path)}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{action.label}</p>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Crypto Assets Owned */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Crypto Assets Owned</span>
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              Portfolio
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cryptoAssets.map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm">{asset.symbol}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{asset.name}</p>
                    <p className="text-sm text-muted-foreground">{asset.amount} {asset.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{asset.value}</p>
                  <Badge 
                    variant="outline" 
                    className={asset.change.startsWith('+') ? 'text-success' : 'text-destructive'}
                  >
                    {asset.change}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">+24.5%</p>
              <p className="text-sm text-muted-foreground">Total Gain</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">Assets</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Trading;