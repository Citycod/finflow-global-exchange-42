import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Store,
  Gift,
  Heart,
  Briefcase,
  Wrench,
  Newspaper,
  DollarSign,
  Calendar,
  MapPin,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const Space = () => {
  const spaceCategories = [
    {
      name: 'E-commerce Store',
      icon: Store,
      color: 'bg-primary',
      rentPrice: '$1.00',
      maintenanceFee: '$0.50/month',
      description: 'Rent space to showcase and sell your products',
      features: ['Product showcase', 'Payment integration', 'Customer reviews', 'Analytics dashboard'],
      stats: { active: 150, revenue: '$2,450' }
    },
    {
      name: 'Airdrop',
      icon: Gift,
      color: 'bg-warning',
      rentPrice: '$10.00',
      maintenanceFee: '$0.50/month',
      description: 'Post and promote your cryptocurrency airdrops',
      features: ['Airdrop listings', 'User tracking', 'Distribution tools', 'Verification system'],
      stats: { active: 85, revenue: '$1,275' }
    },
    {
      name: 'Fund Raising',
      icon: Heart,
      color: 'bg-destructive',
      rentPrice: 'Free',
      maintenanceFee: 'None',
      description: 'Donate to your favorite charity homes and causes',
      features: ['Charity listings', 'Donation tracking', 'Impact reports', 'Transparency tools'],
      stats: { active: 45, raised: '$15,850' }
    },
    {
      name: 'Job Board',
      icon: Briefcase,
      color: 'bg-success',
      rentPrice: '$5.00',
      maintenanceFee: '$0.50/month',
      description: 'Post job opportunities and find clients',
      features: ['Job postings', 'Client matching', 'Portfolio showcase', 'Review system'],
      stats: { active: 120, jobs: 340 }
    },
    {
      name: 'Professional Engineers',
      icon: Wrench,
      color: 'bg-accent',
      rentPrice: 'Admin Only',
      maintenanceFee: 'N/A',
      description: 'Construction and field clearing services',
      features: ['Service listings', 'Project gallery', 'Consultation booking', 'Quote requests'],
      stats: { projects: 25, clients: 67 }
    },
    {
      name: 'News Center',
      icon: Newspaper,
      color: 'bg-muted',
      rentPrice: 'Admin Only',
      maintenanceFee: 'N/A',
      description: 'Latest news across multiple categories',
      features: ['Breaking news', 'Crypto updates', 'Tech trends', 'Global coverage'],
      stats: { articles: 450, readers: '12.5K' }
    }
  ];

  const newsCategories = [
    'Crypto News', 'Breaking News', 'Entertainment', 'Local News', 
    'International', 'Trending Stories', 'Tech News', 'Travel', 'Health'
  ];

  const recentActivity = [
    { type: 'store', user: 'TechHub Store', action: 'Listed new product', time: '2 hours ago' },
    { type: 'airdrop', user: 'CryptoMax', action: 'Posted new airdrop', time: '4 hours ago' },
    { type: 'job', user: 'WebDev Pro', action: 'Posted job opening', time: '6 hours ago' },
    { type: 'charity', user: 'Hope Foundation', action: 'Received donation', time: '8 hours ago' }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Space</h1>
            <p className="text-white/80 mt-1">Community marketplace and services</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-sm">Total Spaces</p>
            <p className="text-2xl font-bold">6</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">565</p>
              <p className="text-sm text-muted-foreground">Active Listings</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">$19.6K</p>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Space Categories */}
      <div className="space-y-6">
        {spaceCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {category.rentPrice}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      {category.maintenanceFee}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div>
                    <p className="font-semibold text-sm mb-2">Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      {Object.entries(category.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="font-bold text-sm">{value}</p>
                          <p className="text-xs text-muted-foreground capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Listings
                      </Button>
                      {!category.rentPrice.includes('Admin') && !category.rentPrice.includes('Free') && (
                        <Button size="sm">
                          Rent Space
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* News Categories */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Newspaper className="h-5 w-5" />
            <span>News Categories</span>
            <Badge variant="secondary">Admin Managed</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {newsCategories.map((category, index) => (
              <Badge key={index} variant="outline" className="justify-center py-2">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'store' ? 'bg-primary/20' :
                    activity.type === 'airdrop' ? 'bg-warning/20' :
                    activity.type === 'job' ? 'bg-success/20' : 'bg-destructive/20'
                  }`}>
                    {activity.type === 'store' ? <Store className="h-4 w-4" /> :
                     activity.type === 'airdrop' ? <Gift className="h-4 w-4" /> :
                     activity.type === 'job' ? <Briefcase className="h-4 w-4" /> :
                     <Heart className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Space;