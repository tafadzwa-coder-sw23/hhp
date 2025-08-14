import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, MapPin, Truck, Clock } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Omron Automatic Blood Pressure Monitor",
    category: "Medical Equipment",
    price: "$89.99",
    originalPrice: "$120.00",
    rating: 4.8,
    reviews: 1324,
    image: "/placeholder.svg",
    badge: "Best Seller",
    inStock: true,
    nearbyStores: 12,
    delivery: "Same day",
    prescription: false
  },
  {
    id: 2,
    name: "Nature Made Vitamin D3 2000 IU",
    category: "Supplements",
    price: "$24.99",
    originalPrice: "$32.00",
    rating: 4.6,
    reviews: 2189,
    image: "/placeholder.svg",
    badge: "FDA Approved",
    inStock: true,
    nearbyStores: 18,
    delivery: "2-3 hours",
    prescription: false
  },
  {
    id: 3,
    name: "3M N95 Health Care Respirator (20-pack)",
    category: "Medical Consumables",
    price: "$45.99",
    originalPrice: "$60.00",
    rating: 4.9,
    reviews: 3567,
    image: "/placeholder.svg",
    badge: "Medical Grade",
    inStock: true,
    nearbyStores: 25,
    delivery: "1-2 hours",
    prescription: false
  },
  {
    id: 4,
    name: "Fingertip Pulse Oximeter with LED Display",
    category: "Medical Devices",
    price: "$35.99",
    originalPrice: "$45.00",
    rating: 4.7,
    reviews: 1423,
    image: "/placeholder.svg",
    badge: "Professional",
    inStock: true,
    nearbyStores: 16,
    delivery: "Same day",
    prescription: false
  },
  {
    id: 5,
    name: "Lisinopril 10mg Tablets (30-count)",
    category: "Prescription Drugs",
    price: "$12.99",
    originalPrice: "$18.00",
    rating: 4.5,
    reviews: 892,
    image: "/placeholder.svg",
    badge: "Rx Required",
    inStock: true,
    nearbyStores: 22,
    delivery: "2-4 hours",
    prescription: true
  },
  {
    id: 6,
    name: "Digital Thermometer with Flexible Tip",
    category: "Medical Devices",
    price: "$19.99",
    originalPrice: "$25.00",
    rating: 4.4,
    reviews: 756,
    image: "/placeholder.svg",
    badge: "Fast & Accurate",
    inStock: true,
    nearbyStores: 14,
    delivery: "Same day",
    prescription: false
  },
  {
    id: 7,
    name: "Glucosamine Chondroitin MSM (180 capsules)",
    category: "Supplements",
    price: "$39.99",
    originalPrice: "$55.00",
    rating: 4.6,
    reviews: 1156,
    image: "/placeholder.svg",
    badge: "Joint Support",
    inStock: true,
    nearbyStores: 19,
    delivery: "2-3 hours",
    prescription: false
  },
  {
    id: 8,
    name: "KN95 Face Masks (50-pack)",
    category: "Medical Consumables",
    price: "$29.99",
    originalPrice: "$40.00",
    rating: 4.3,
    reviews: 2234,
    image: "/placeholder.svg",
    badge: "Certified",
    inStock: false,
    nearbyStores: 8,
    delivery: "Out of stock",
    prescription: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Health Products</h2>
          <p className="text-muted-foreground">
            Top-rated healthcare products trusted by professionals and patients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md bg-muted"
                  />
                  <Badge 
                    className={`absolute top-2 left-2 ${
                      product.prescription ? 'bg-red-600' : 'bg-primary'
                    } text-white`}
                  >
                    {product.badge}
                  </Badge>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 rounded-md flex items-center justify-center">
                      <span className="text-white font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()})</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm line-through text-muted-foreground">{product.originalPrice}</span>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{product.nearbyStores} stores nearby</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Truck className="h-3 w-3" />
                    <span>Delivery: {product.delivery}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? (product.prescription ? "Rx Required" : "Add to Cart") : "Notify When Available"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Products ({(150000).toLocaleString()}+ items)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;