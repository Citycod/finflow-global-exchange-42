import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Edit, 
  Shield, 
  Bell, 
  HelpCircle, 
  Info,
  ChevronRight,
  Settings,
  LogOut
} from 'lucide-react';

const Profile = () => {
  const profileOptions = [
    {
      icon: Edit,
      title: 'Edit Profile',
      description: 'Update your personal information',
      color: 'bg-primary'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Change password and security settings',
      color: 'bg-success'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      color: 'bg-warning'
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help and contact support',
      color: 'bg-muted'
    },
    {
      icon: Info,
      title: 'About',
      description: 'App version and information',
      color: 'bg-muted'
    }
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button size="icon" variant="outline">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Profile Card */}
      <Card className="shadow-card mb-6">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">U</span>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">User Name</h2>
              <p className="text-muted-foreground">user@example.com</p>
            </div>

            <Button variant="outline" size="sm" className="mt-4">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Profile Options */}
      <div className="space-y-3">
        {profileOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <Card key={index} className="hover:shadow-hover transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${option.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Account Actions */}
      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Account</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Shield className="h-5 w-5 mr-3" />
              Security Settings
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Bell className="h-5 w-5 mr-3" />
              Notification Preferences
            </Button>
            
            <Button variant="destructive" className="w-full justify-start">
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Info */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">FinFlow v1.0.0</p>
        <p className="text-xs text-muted-foreground mt-1">
          © 2024 FinFlow. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Profile;