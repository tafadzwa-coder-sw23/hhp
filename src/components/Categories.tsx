import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Pill, Stethoscope, Activity, Microscope, Bandage, Monitor } from "lucide-react";

const categories = [
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "12,000+ medications available",
    color: "text-blue-600",
    count: "12,847"
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    description: "Professional grade devices",
    color: "text-green-600",
    count: "8,234"
  },
  {
    icon: Activity,
    title: "Health Services",
    description: "Expert consultations",
    color: "text-purple-600",
    count: "15,672"
  },
  {
    icon: Microscope,
    title: "Lab & Diagnostics", 
    description: "Accurate test results",
    color: "text-red-600",
    count: "3,456"
  },
  {
    icon: Bandage,
    title: "Medical Consumables",
    description: "Quality disposable supplies",
    color: "text-orange-600",
    count: "25,891"
  },
  {
    icon: Monitor,
    title: "Health Technology",
    description: "Digital health solutions",
    color: "text-teal-600",
    count: "4,123"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse Health Categories</h2>
          <p className="text-muted-foreground">
            Find exactly what you need across our comprehensive health marketplace
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-muted mb-4 group-hover:bg-primary/10 transition-colors ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{category.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{category.description}</p>
                  <p className="text-xs font-medium text-primary">{category.count} items</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;