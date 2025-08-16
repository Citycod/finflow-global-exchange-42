import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Facebook,
  Youtube,
  MessageCircle,
  Heart,
  Eye,
  Users,
  ThumbsUp,
  MessageSquare,
  Play,
  Star,
  Music
} from 'lucide-react';

const SocialTools = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      services: [
        { name: 'Auto Likes', price: '$5.99', description: 'Increase post engagement' },
        { name: 'Auto Views', price: '$7.99', description: 'Boost video views' },
        { name: 'Auto Comments', price: '$9.99', description: 'Generate comments' },
        { name: 'Auto Followers', price: '$12.99', description: 'Grow your audience' }
      ]
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'bg-red-600',
      services: [
        { name: 'Auto Views', price: '$8.99', description: 'Increase video views' },
        { name: 'Auto Subscribers', price: '$15.99', description: 'Grow subscriber count' },
        { name: 'Auto Likes', price: '$6.99', description: 'Boost video likes' },
        { name: 'Auto Comments', price: '$10.99', description: 'Generate comments' }
      ]
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      color: 'bg-blue-500',
      services: [
        { name: 'Auto Members', price: '$11.99', description: 'Increase channel members' },
        { name: 'Auto Views', price: '$7.99', description: 'Boost post views' },
        { name: 'Auto Reactions', price: '$5.99', description: 'Generate reactions' }
      ]
    },
    {
      name: 'TikTok',
      icon: Music,
      color: 'bg-black',
      services: [
        { name: 'Auto Followers', price: '$13.99', description: 'Grow your following' },
        { name: 'Auto Likes', price: '$6.99', description: 'Increase likes' },
        { name: 'Auto Views', price: '$8.99', description: 'Boost video views' },
        { name: 'Auto Comments', price: '$9.99', description: 'Generate comments' }
      ]
    },
    {
      name: 'Snapchat',
      icon: MessageSquare,
      color: 'bg-yellow-500',
      services: [
        { name: 'Auto Views', price: '$7.99', description: 'Increase story views' },
        { name: 'Auto Likes', price: '$5.99', description: 'Boost snap likes' },
        { name: 'Auto Followers', price: '$12.99', description: 'Grow followers' },
        { name: 'Auto Reactions', price: '$6.99', description: 'Generate reactions' }
      ]
    },
    {
      name: 'Spotify',
      icon: Play,
      color: 'bg-green-600',
      services: [
        { name: 'Auto Followers', price: '$10.99', description: 'Increase followers' },
        { name: 'Auto Streams', price: '$14.99', description: 'Boost track plays' }
      ]
    },
    {
      name: 'Audio Max',
      icon: Music,
      color: 'bg-purple-600',
      services: [
        { name: 'Auto Followers', price: '$9.99', description: 'Grow your audience' },
        { name: 'Auto Streams', price: '$13.99', description: 'Increase streams' }
      ]
    },
    {
      name: 'Instagram',
      icon: Heart,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      services: [
        { name: 'Auto Followers', price: '$11.99', description: 'Grow your following' },
        { name: 'Auto Likes', price: '$6.99', description: 'Increase post likes' },
        { name: 'Auto Views', price: '$8.99', description: 'Boost story/reel views' }
      ]
    },
    {
      name: 'App Store',
      icon: Star,
      color: 'bg-gray-800',
      services: [
        { name: 'Auto Reviews', price: '$16.99', description: 'Generate app reviews' },
        { name: 'Auto Ratings', price: '$19.99', description: 'Improve app ratings' }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Social Tools</h1>
            <p className="text-white/80 mt-1">Boost your social media presence</p>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="font-semibold">Growth Suite</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">9</p>
              <p className="text-sm text-muted-foreground">Platforms</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">32</p>
              <p className="text-sm text-muted-foreground">Services</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Services */}
      <div className="space-y-6">
        {socialPlatforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <Card key={index} className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span>{platform.name}</span>
                  <Badge variant="secondary">{platform.services.length} Services</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {platform.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{service.name}</p>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="font-semibold">
                          {service.price}
                        </Badge>
                        <Button size="sm" variant="default">
                          Order
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Popular Services */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-warning" />
            <span>Most Popular Services</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
              <div>
                <p className="font-semibold text-sm">Instagram Auto Followers</p>
                <p className="text-xs text-muted-foreground">Most ordered service</p>
              </div>
              <Badge className="bg-success text-white">$11.99</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div>
                <p className="font-semibold text-sm">YouTube Auto Subscribers</p>
                <p className="text-xs text-muted-foreground">Trending service</p>
              </div>
              <Badge className="bg-primary text-white">$15.99</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div>
                <p className="font-semibold text-sm">TikTok Auto Followers</p>
                <p className="text-xs text-muted-foreground">High demand</p>
              </div>
              <Badge className="bg-warning text-white">$13.99</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialTools;