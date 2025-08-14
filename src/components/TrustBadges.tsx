import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "FDA Approved",
    description: "All pharmaceutical products are FDA certified"
  },
  {
    icon: Award,
    title: "Professional Grade",
    description: "Medical equipment meets hospital standards"
  },
  {
    icon: Users,
    title: "Verified Providers",
    description: "Licensed healthcare professionals only"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose HealthMart?</h2>
          <p className="text-muted-foreground">
            Your health and safety are our top priorities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;