import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBadges from "@/components/TrustBadges";
import LocationSearch from "@/components/LocationSearch";
import DiagnosisChecker from "@/components/DiagnosisChecker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <LocationSearch />
      <section id="diagnosis" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Health Assessment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant health recommendations, find nearby medications, and connect with qualified healthcare professionals
            </p>
          </div>
          <DiagnosisChecker />
        </div>
      </section>
      <TrustBadges />
    </div>
  );
};

export default Index;