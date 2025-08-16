import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowUpRight, 
  Plus, 
  ArrowRightLeft, 
  TrendingUp,
  Eye,
  EyeOff,
  Minus,
  QrCode,
  Lightbulb,
  History,
  DollarSign,
  ChevronDown,
  Wallet,
  CreditCard
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = ["USD", "EUR", "GBP", "NGN", "BTC"];
  
  // Daily saving tip
  const dailyTip = "Set up automatic savings of 10% from each deposit to build your emergency fund faster.";

  const quickActions = [
    {
      icon: Plus,
      label: 'Deposit',
      description: 'Add Funds',
      color: 'bg-success',
      path: '/deposit'
    },
    {
      icon: Minus,
      label: 'Withdraw',
      description: 'Cash out',
      color: 'bg-destructive',
      path: '/banking'
    },
    {
      icon: ArrowUpRight,
      label: 'Send Money',
      description: 'Transfer funds',
      color: 'bg-primary',
      path: '/send'
    },
    {
      icon: ArrowRightLeft,
      label: 'Exchange',
      description: 'Crypto to fiat',
      color: 'bg-warning',
      path: '/crypto'
    },
    {
      icon: CreditCard,
      label: 'Virtual Card',
      description: 'Manage cards',
      color: 'bg-accent',
      path: '/banking'
    },
    {
      icon: History,
      label: 'History',
      description: 'View transactions',
      color: 'bg-muted',
      path: '/transactions'
    }
  ];

  // Recent transactions data
  const recentTransactions = [
    {
      id: 1,
      type: "deposit",
      amount: "+$500.00",
      description: "Bank Transfer",
      time: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      type: "send",
      amount: "-$50.00",
      description: "Sent to John Doe",
      time: "1 day ago",
      status: "completed"
    },
    {
      id: 3,
      type: "crypto",
      amount: "-$200.00",
      description: "Bought Bitcoin",
      time: "2 days ago",
      status: "completed"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header with Username and Top Actions */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">J</span>
            </div>
            <div>
              <p className="text-white/80">Welcome back,</p>
              <h2 className="text-xl font-semibold">John Doe</h2>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/help')}
            >
              <span className="text-sm">Help</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
            >
              <QrCode className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Account Balance Card with Currency Switcher */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-muted-foreground">Account Balance</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => {
                  const currentIndex = currencies.indexOf(selectedCurrency);
                  const nextIndex = (currentIndex + 1) % currencies.length;
                  setSelectedCurrency(currencies[nextIndex]);
                }}
              >
                {selectedCurrency} <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">
              {showBalance ? `${selectedCurrency === 'BTC' ? '₿' : '$'}${selectedCurrency === 'BTC' ? '1.25' : '12,450.00'}` : '****'}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Fiat Balance</p>
                <p className="text-lg font-semibold">
                  {showBalance ? '$12,450.00' : '****'}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Crypto Value</p>
                <p className="text-lg font-semibold">
                  {showBalance ? '₿1.25' : '****'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Saving Tips */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-primary">Daily Saving Tip</h4>
              <p className="text-sm text-muted-foreground mt-1">{dailyTip}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
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

      {/* Virtual Card Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Virtual Card</span>
            <Button variant="outline" size="sm">Manage</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-4 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-white/80 text-sm">Virtual Card</p>
                <p className="font-semibold">**** **** **** 1234</p>
              </div>
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-white/80 text-xs">Valid Thru</p>
                <p className="text-sm font-semibold">12/26</p>
              </div>
              <div>
                <p className="text-white/80 text-xs">CVV</p>
                <p className="text-sm font-semibold">***</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Transaction History</span>
            <Button variant="ghost" size="sm" onClick={() => navigate('/transactions')}>View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentTransactions.length > 0 ? (
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'deposit' ? 'bg-success/20' : 
                      transaction.type === 'send' ? 'bg-destructive/20' : 'bg-warning/20'
                    }`}>
                      {transaction.type === 'deposit' ? <Plus className="h-4 w-4 text-success" /> :
                       transaction.type === 'send' ? <ArrowUpRight className="h-4 w-4 text-destructive" /> :
                       <TrendingUp className="h-4 w-4 text-warning" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.amount.startsWith('+') ? 'text-success' : 'text-destructive'
                    }`}>
                      {transaction.amount}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <History className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">No transactions yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Start by making your first deposit or transfer
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;