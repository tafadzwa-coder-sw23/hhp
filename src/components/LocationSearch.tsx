import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Phone, Navigation, Calendar } from "lucide-react";

interface HealthService {
  id: string;
  name: string;
  type: 'pharmacy' | 'hospital' | 'clinic' | 'lab' | 'dental' | 'urgent_care' | 'specialist';
  distance: number;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  address: string;
  phone: string;
  nextAvailable?: string;
  services: string[];
  acceptsInsurance: string[];
  waitTime?: string;
  price?: string;
}

const mockServices: HealthService[] = [
  {
    id: '1',
    name: 'CVS Pharmacy #4521',
    type: 'pharmacy',
    distance: 0.3,
    rating: 4.5,
    reviewCount: 1247,
    isOpen: true,
    address: '123 Main St, Downtown District',
    phone: '(555) 123-4567',
    services: ['Prescriptions', 'Vaccinations', 'Health Screenings', 'Photo Services', 'MinuteClinic'],
    acceptsInsurance: ['Blue Cross', 'Aetna', 'Cigna', 'UnitedHealth'],
    waitTime: '5-10 min',
    price: '$'
  },
  {
    id: '2',
    name: 'City General Hospital',
    type: 'hospital',
    distance: 0.8,
    rating: 4.7,
    reviewCount: 3421,
    isOpen: true,
    address: '456 Hospital Ave, Medical District',
    phone: '(555) 987-6543',
    nextAvailable: 'Emergency: 24/7 Available',
    services: ['Emergency Care', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'ICU'],
    acceptsInsurance: ['All Major Insurance', 'Medicare', 'Medicaid'],
    waitTime: 'Emergency: 15-30 min',
    price: '$$$'
  },
  {
    id: '3',
    name: 'QuickCare Urgent Care',
    type: 'urgent_care',
    distance: 0.5,
    rating: 4.3,
    reviewCount: 892,
    isOpen: true,
    address: '789 Health Blvd, Suburban Plaza',
    phone: '(555) 456-7890',
    nextAvailable: 'Walk-ins Welcome',
    services: ['Urgent Care', 'X-Rays', 'Lab Tests', 'Minor Surgery', 'Sports Medicine'],
    acceptsInsurance: ['Blue Cross', 'Aetna', 'Cigna'],
    waitTime: '15-25 min',
    price: '$$'
  },
  {
    id: '4',
    name: 'MedLab Diagnostics Center',
    type: 'lab',
    distance: 1.2,
    rating: 4.6,
    reviewCount: 567,
    isOpen: false,
    address: '321 Science Dr, Research Park',
    phone: '(555) 234-5678',
    nextAvailable: 'Tomorrow 7:00 AM',
    services: ['Blood Tests', 'MRI Imaging', 'CT Scans', 'Pathology', 'Genetic Testing'],
    acceptsInsurance: ['Most Insurance Plans', 'Medicare'],
    price: '$$'
  },
  {
    id: '5',
    name: 'Bright Smiles Family Dental',
    type: 'dental',
    distance: 0.7,
    rating: 4.8,
    reviewCount: 432,
    isOpen: true,
    address: '654 Dental Way, Family Center',
    phone: '(555) 345-6789',
    nextAvailable: 'Today 3:30 PM',
    services: ['General Dentistry', 'Cosmetic', 'Orthodontics', 'Oral Surgery', 'Pediatric'],
    acceptsInsurance: ['Delta Dental', 'Cigna Dental', 'MetLife'],
    waitTime: 'By appointment',
    price: '$$'
  },
  {
    id: '6',
    name: 'Walgreens Pharmacy #8234',
    type: 'pharmacy',
    distance: 0.9,
    rating: 4.2,
    reviewCount: 923,
    isOpen: true,
    address: '987 Commerce St, Shopping Center',
    phone: '(555) 567-8901',
    services: ['Prescriptions', 'Flu Shots', 'COVID Testing', 'Photo Services', 'Wellness+'],
    acceptsInsurance: ['Most Insurance Plans'],
    waitTime: '10-15 min',
    price: '$'
  },
  {
    id: '7',
    name: 'Regional Medical Center',
    type: 'hospital',
    distance: 2.1,
    rating: 4.9,
    reviewCount: 2156,
    isOpen: true,
    address: '1234 Medical Center Dr, University District',
    phone: '(555) 678-9012',
    nextAvailable: 'Scheduled Appointments Available',
    services: ['Trauma Center', 'Cancer Care', 'Heart Surgery', 'Neurology', 'Transplant Center'],
    acceptsInsurance: ['All Major Insurance', 'Medicare', 'Medicaid', 'Workers Comp'],
    price: '$$$$'
  },
  {
    id: '8',
    name: 'Family Health Clinic',
    type: 'clinic',
    distance: 1.5,
    rating: 4.4,
    reviewCount: 678,
    isOpen: true,
    address: '555 Community Ave, Neighborhood Center',
    phone: '(555) 789-0123',
    nextAvailable: 'Tomorrow 9:00 AM',
    services: ['Family Medicine', 'Pediatrics', 'Women\'s Health', 'Diabetes Care', 'Hypertension'],
    acceptsInsurance: ['Blue Cross', 'Aetna', 'Medicaid'],
    waitTime: '20-30 min',
    price: '$$'
  },
  {
    id: '9',
    name: 'Dr. Sarah Johnson - Cardiologist',
    type: 'specialist',
    distance: 1.8,
    rating: 4.9,
    reviewCount: 234,
    isOpen: true,
    address: '777 Heart Center Dr, Specialist Building',
    phone: '(555) 890-1234',
    nextAvailable: 'Next Week Tuesday 2:00 PM',
    services: ['Cardiology', 'Heart Surgery', 'Cardiac Catheterization', 'Echocardiograms'],
    acceptsInsurance: ['Blue Cross', 'Aetna', 'UnitedHealth'],
    waitTime: 'By appointment only',
    price: '$$$'
  },
  {
    id: '10',
    name: 'Rite Aid Pharmacy #1567',
    type: 'pharmacy',
    distance: 1.1,
    rating: 4.1,
    reviewCount: 456,
    isOpen: true,
    address: '246 Oak Street, Historic District',
    phone: '(555) 901-2345',
    services: ['Prescriptions', 'Immunizations', 'Health Screenings', 'Wellness Rewards'],
    acceptsInsurance: ['Most Insurance Plans', 'GoodRx'],
    waitTime: '5-12 min',
    price: '$'
  }
];

const getServiceTypeColor = (type: string) => {
  switch (type) {
    case 'pharmacy': return 'bg-blue-100 text-blue-800';
    case 'hospital': return 'bg-red-100 text-red-800';
    case 'clinic': return 'bg-green-100 text-green-800';
    case 'lab': return 'bg-purple-100 text-purple-800';
    case 'dental': return 'bg-orange-100 text-orange-800';
    case 'urgent_care': return 'bg-yellow-100 text-yellow-800';
    case 'specialist': return 'bg-pink-100 text-pink-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getServiceTypeIcon = (type: string) => {
  switch (type) {
    case 'pharmacy': return '💊';
    case 'hospital': return '🏥';
    case 'clinic': return '🩺';
    case 'lab': return '🔬';
    case 'dental': return '🦷';
    case 'urgent_care': return '🚑';
    case 'specialist': return '👨‍⚕️';
    default: return '🏢';
  }
};

const formatServiceType = (type: string) => {
  return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const LocationSearch = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyServices, setNearbyServices] = useState<HealthService[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setNearbyServices(mockServices);
        },
        () => {
          setUserLocation({ lat: 40.7128, lng: -74.0060 });
          setNearbyServices(mockServices);
        }
      );
    } else {
      setUserLocation({ lat: 40.7128, lng: -74.0060 });
      setNearbyServices(mockServices);
    }
  }, []);

  const filteredServices = nearbyServices.filter(service => 
    selectedType === 'all' || service.type === selectedType
  ).sort((a, b) => a.distance - b.distance);

  const serviceTypes = ['all', 'pharmacy', 'hospital', 'clinic', 'urgent_care', 'lab', 'dental', 'specialist'];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Health Services Near You</h2>
          <p className="text-muted-foreground mb-6">
            Discover {nearbyServices.length}+ verified healthcare providers in your area
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>📍 Current location: Downtown District, New York, NY</span>
          </div>
        </div>

        {/* Service Type Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {serviceTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              onClick={() => setSelectedType(type)}
              className="capitalize"
            >
              {type === 'all' ? 'All Services' : `${getServiceTypeIcon(type)} ${formatServiceType(type)}`}
            </Button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Open Now</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">4.6</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">15min</div>
            <div className="text-sm text-muted-foreground">Avg Wait Time</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Accept Insurance</div>
          </Card>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2 mb-2">
                      <span>{getServiceTypeIcon(service.type)}</span>
                      {service.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getServiceTypeColor(service.type)} variant="secondary">
                        {formatServiceType(service.type)}
                      </Badge>
                      <Badge variant={service.isOpen ? 'default' : 'secondary'}>
                        {service.isOpen ? 'Open' : 'Closed'}
                      </Badge>
                      {service.price && (
                        <Badge variant="outline">{service.price}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">({service.reviewCount} reviews)</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{service.distance} miles away</span>
                </div>
                
                <p className="text-sm text-muted-foreground">{service.address}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{service.phone}</span>
                </div>
                
                {service.waitTime && (
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Wait time: {service.waitTime}</span>
                  </div>
                )}
                
                {service.nextAvailable && (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{service.nextAvailable}</span>
                  </div>
                )}
                
                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.services.slice(0, 3).map((serviceItem, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {serviceItem}
                      </Badge>
                    ))}
                    {service.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2">Insurance:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.acceptsInsurance.slice(0, 2).map((insurance, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {insurance}
                      </Badge>
                    ))}
                    {service.acceptsInsurance.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.acceptsInsurance.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Navigation className="h-3 w-3 mr-1" />
                    Directions
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No services found for the selected type.</p>
          </div>
        )}
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Results ({(Math.random() * 500 + 100).toFixed(0)} more nearby)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSearch;