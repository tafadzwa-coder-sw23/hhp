import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu, Bell, Heart } from "lucide-react";
import { useUser } from '@/contexts/UserContext';
import { dummyUser } from '@/data/dummyData';

const Header = () => {
  const { user, setUser } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3); // Dummy cart count
  const [notificationCount] = useState(2); // Dummy notification count

  // Set dummy user for demonstration
  React.useEffect(() => {
    setUser(dummyUser);
  }, [setUser]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 px-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-primary">HealthMart</span>
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-lg relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search for health products, services, medications..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-input focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Equipment</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Pharma</a>
          <a href="#diagnosis" className="text-foreground hover:text-primary transition-colors">Health Check</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
              </div>
              
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </div>
              
              <div className="relative">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hidden lg:block">{user.name}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
