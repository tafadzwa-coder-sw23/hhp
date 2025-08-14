import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  const [location, setLocation] = useState('');
  
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find quality healthcare products, services, and professionals near you. 
            From medications to medical equipment, we connect you with trusted health solutions.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-full shadow-lg border">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search health products, services..." 
                  className="w-full pl-12 pr-4 border-0 focus:ring-0 bg-transparent"
                />
              </div>
              <div className="flex items-center gap-2 px-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-40 border-0 focus:ring-0 bg-transparent"
                />
              </div>
              <Button size="lg" className="px-8 rounded-full">
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">150K+</div>
              <div className="text-sm text-muted-foreground">Health Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">25K+</div>
              <div className="text-sm text-muted-foreground">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1,200+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2.5M+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;