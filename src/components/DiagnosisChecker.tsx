import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Pill, Stethoscope, AlertTriangle, Clock, Star } from "lucide-react";

interface Condition {
  name: string;
  confidence: number;
  description: string;
  urgency: 'low' | 'medium' | 'high';
  recommendations: {
    drugs: Array<{
      name: string;
      dosage: string;
      price: string;
      prescription: boolean;
      nearbyPharmacies: Array<{
        name: string;
        distance: string;
        rating: number;
        inStock: boolean;
      }>;
    }>;
    specialists: Array<{
      name: string;
      specialization: string;
      distance: string;
      rating: number;
      nextAvailable: string;
      hospital: string;
    }>;
  };
}

const mockConditions: Record<string, Condition> = {
  "headache fever tired": {
    name: "Common Cold/Flu",
    confidence: 87,
    description: "Viral upper respiratory infection with systemic symptoms",
    urgency: 'low',
    recommendations: {
      drugs: [
        {
          name: "Acetaminophen (Tylenol) 500mg",
          dosage: "1-2 tablets every 4-6 hours, max 8 tablets/day",
          price: "$8.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true },
            { name: "Walgreens #8234", distance: "0.7 miles", rating: 4.2, inStock: true },
            { name: "Rite Aid #1567", distance: "1.1 miles", rating: 4.1, inStock: true }
          ]
        },
        {
          name: "Ibuprofen (Advil) 400mg",
          dosage: "1 tablet every 6-8 hours with food",
          price: "$12.50",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true },
            { name: "Target Pharmacy", distance: "0.9 miles", rating: 4.3, inStock: false }
          ]
        },
        {
          name: "Dextromethorphan Cough Syrup",
          dosage: "15ml every 4 hours as needed",
          price: "$7.25",
          prescription: false,
          nearbyPharmacies: [
            { name: "Walgreens #8234", distance: "0.7 miles", rating: 4.2, inStock: true }
          ]
        }
      ],
      specialists: [
        {
          name: "Dr. Sarah Johnson, MD",
          specialization: "Family Medicine",
          distance: "0.5 miles",
          rating: 4.8,
          nextAvailable: "Today 3:00 PM",
          hospital: "Family Health Clinic"
        },
        {
          name: "Dr. Michael Chen, DO",
          specialization: "Internal Medicine",
          distance: "1.1 miles",
          rating: 4.7,
          nextAvailable: "Tomorrow 9:00 AM",
          hospital: "Regional Medical Center"
        }
      ]
    }
  },
  "chest pain shortness breath": {
    name: "Possible Cardiac Emergency",
    confidence: 75,
    description: "Symptoms requiring immediate medical evaluation to rule out heart attack",
    urgency: 'high',
    recommendations: {
      drugs: [
        {
          name: "Aspirin 325mg (Chewable)",
          dosage: "1 tablet, chew and swallow immediately",
          price: "$3.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true }
          ]
        }
      ],
      specialists: [
        {
          name: "Emergency Department",
          specialization: "Emergency Medicine",
          distance: "0.4 miles",
          rating: 4.6,
          nextAvailable: "24/7 Available - GO NOW",
          hospital: "City General Hospital"
        },
        {
          name: "Dr. Robert Martinez, MD",
          specialization: "Cardiology",
          distance: "0.8 miles",
          rating: 4.9,
          nextAvailable: "Emergency consultation available",
          hospital: "Heart Institute"
        }
      ]
    }
  },
  "stomach pain nausea vomiting": {
    name: "Gastroenteritis",
    confidence: 82,
    description: "Inflammation of stomach and intestines, likely viral or food-related",
    urgency: 'medium',
    recommendations: {
      drugs: [
        {
          name: "Oral Rehydration Solution (Pedialyte)",
          dosage: "200ml every 2-3 hours or as tolerated",
          price: "$5.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true },
            { name: "Walgreens #8234", distance: "0.7 miles", rating: 4.2, inStock: true }
          ]
        },
        {
          name: "Loperamide (Imodium) 2mg",
          dosage: "2mg after each loose stool, max 8mg/day",
          price: "$9.75",
          prescription: false,
          nearbyPharmacies: [
            { name: "Rite Aid #1567", distance: "1.1 miles", rating: 4.1, inStock: true }
          ]
        },
        {
          name: "Bismuth Subsalicylate (Pepto-Bismol)",
          dosage: "30ml every 30-60 minutes as needed",
          price: "$8.50",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true }
          ]
        }
      ],
      specialists: [
        {
          name: "Dr. Lisa Wang, MD",
          specialization: "Gastroenterology",
          distance: "1.5 miles",
          rating: 4.7,
          nextAvailable: "Tomorrow 2:00 PM",
          hospital: "Digestive Health Center"
        },
        {
          name: "QuickCare Urgent Care",
          specialization: "Urgent Care",
          distance: "0.5 miles",
          rating: 4.3,
          nextAvailable: "Walk-ins welcome",
          hospital: "QuickCare Medical"
        }
      ]
    }
  },
  "cough sore throat runny nose": {
    name: "Upper Respiratory Infection",
    confidence: 90,
    description: "Common viral infection affecting nose, throat, and upper airways",
    urgency: 'low',
    recommendations: {
      drugs: [
        {
          name: "Guaifenesin (Mucinex) 600mg",
          dosage: "1 tablet every 12 hours with water",
          price: "$14.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true },
            { name: "Walgreens #8234", distance: "0.7 miles", rating: 4.2, inStock: true }
          ]
        },
        {
          name: "Throat Lozenges with Menthol",
          dosage: "1 lozenge every 2 hours as needed",
          price: "$4.50",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true }
          ]
        }
      ],
      specialists: [
        {
          name: "Dr. Jennifer Adams, NP",
          specialization: "Nurse Practitioner",
          distance: "0.6 miles",
          rating: 4.6,
          nextAvailable: "Today 4:30 PM",
          hospital: "Neighborhood Health Clinic"
        }
      ]
    }
  },
  "rash itchy skin allergic": {
    name: "Allergic Dermatitis",
    confidence: 78,
    description: "Skin reaction likely due to allergen contact or systemic allergy",
    urgency: 'medium',
    recommendations: {
      drugs: [
        {
          name: "Diphenhydramine (Benadryl) 25mg",
          dosage: "1-2 tablets every 4-6 hours",
          price: "$6.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true },
            { name: "Walgreens #8234", distance: "0.7 miles", rating: 4.2, inStock: true }
          ]
        },
        {
          name: "Hydrocortisone Cream 1%",
          dosage: "Apply thin layer 2-3 times daily to affected area",
          price: "$5.25",
          prescription: false,
          nearbyPharmacies: [
            { name: "Rite Aid #1567", distance: "1.1 miles", rating: 4.1, inStock: true }
          ]
        },
        {
          name: "Cetirizine (Zyrtec) 10mg",
          dosage: "1 tablet once daily",
          price: "$18.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true }
          ]
        }
      ],
      specialists: [
        {
          name: "Dr. Amanda Foster, MD",
          specialization: "Dermatology",
          distance: "2.1 miles",
          rating: 4.8,
          nextAvailable: "Next week Tuesday 10:00 AM",
          hospital: "Dermatology Associates"
        }
      ]
    }
  },
  "back pain muscle ache": {
    name: "Musculoskeletal Pain",
    confidence: 85,
    description: "Muscle strain or minor back injury, likely mechanical",
    urgency: 'low',
    recommendations: {
      drugs: [
        {
          name: "Naproxen (Aleve) 220mg",
          dosage: "1-2 tablets every 8-12 hours with food",
          price: "$11.99",
          prescription: false,
          nearbyPharmacies: [
            { name: "CVS Pharmacy #4521", distance: "0.3 miles", rating: 4.5, inStock: true },
            { name: "Walgreens #8234", distance: "0.7 miles", rating: 4.2, inStock: true }
          ]
        },
        {
          name: "Topical Menthol Gel (Bengay)",
          dosage: "Apply to affected area 3-4 times daily",
          price: "$8.75",
          prescription: false,
          nearbyPharmacies: [
            { name: "Rite Aid #1567", distance: "1.1 miles", rating: 4.1, inStock: true }
          ]
        }
      ],
      specialists: [
        {
          name: "Dr. Kevin Thompson, PT",
          specialization: "Physical Therapy",
          distance: "1.2 miles",
          rating: 4.7,
          nextAvailable: "Tomorrow 11:00 AM",
          hospital: "Sports Medicine Center"
        },
        {
          name: "Dr. Maria Rodriguez, MD",
          specialization: "Orthopedics",
          distance: "1.8 miles",
          rating: 4.6,
          nextAvailable: "Friday 2:30 PM",
          hospital: "Orthopedic Specialists"
        }
      ]
    }
  }
};

const DiagnosisChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState<Condition | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDiagnosis = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple keyword matching for demo
    const symptomsLower = symptoms.toLowerCase();
    let matchedCondition = null;
    
    for (const [keywords, condition] of Object.entries(mockConditions)) {
      if (keywords.split(' ').some(keyword => symptomsLower.includes(keyword))) {
        matchedCondition = condition;
        break;
      }
    }
    
    setDiagnosis(matchedCondition);
    setIsLoading(false);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            AI Health Assessment
          </CardTitle>
          <p className="text-muted-foreground">
            Describe your symptoms to get personalized health recommendations
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <Label>Location</Label>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Current location detected
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="symptoms">Describe your symptoms</Label>
            <Textarea
              id="symptoms"
              placeholder="e.g., headache, fever, stomach pain, difficulty breathing..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows={4}
            />
          </div>
          
          <Button 
            onClick={handleDiagnosis}
            disabled={!symptoms.trim() || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Clock className="h-4 w-4 mr-2 animate-spin" />
                Analyzing symptoms...
              </>
            ) : (
              <>
                <Stethoscope className="h-4 w-4 mr-2" />
                Get Health Assessment
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {diagnosis && (
        <div className="space-y-6">
          {/* Diagnosis Results */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Assessment Results</CardTitle>
                <Badge className={getUrgencyColor(diagnosis.urgency)}>
                  {diagnosis.urgency.toUpperCase()} PRIORITY
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{diagnosis.name}</h3>
                  <p className="text-muted-foreground">{diagnosis.description}</p>
                  <div className="mt-2">
                    <span className="text-sm font-medium">Confidence: {diagnosis.confidence}%</span>
                  </div>
                </div>
                
                {diagnosis.urgency === 'high' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertTriangle className="h-5 w-5" />
                      <strong>Seek immediate medical attention</strong>
                    </div>
                    <p className="text-red-600 mt-1">
                      These symptoms may require urgent care. Please visit the nearest emergency room or call emergency services.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Medication Recommendations */}
          {diagnosis.recommendations.drugs.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="h-5 w-5" />
                  Recommended Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {diagnosis.recommendations.drugs.map((drug, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{drug.name}</h4>
                          <p className="text-sm text-muted-foreground">Dosage: {drug.dosage}</p>
                          <p className="text-sm font-medium text-primary">{drug.price}</p>
                          {drug.prescription && (
                            <Badge variant="outline" className="mt-1">Prescription Required</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-2">Available at nearby pharmacies:</h5>
                        <div className="grid gap-2">
                          {drug.nearbyPharmacies.map((pharmacy, pIndex) => (
                            <div key={pIndex} className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <div className="font-medium">{pharmacy.name}</div>
                                <div className="text-sm text-muted-foreground flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {pharmacy.distance}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    {pharmacy.rating}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge variant={pharmacy.inStock ? "default" : "secondary"}>
                                  {pharmacy.inStock ? "In Stock" : "Out of Stock"}
                                </Badge>
                                <Button size="sm" className="ml-2" disabled={!pharmacy.inStock}>
                                  {pharmacy.inStock ? "Reserve" : "Notify"}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Healthcare Provider Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                Recommended Healthcare Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {diagnosis.recommendations.specialists.map((specialist, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{specialist.name}</h4>
                        <p className="text-sm text-muted-foreground">{specialist.specialization}</p>
                        <p className="text-sm text-muted-foreground">{specialist.hospital}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {specialist.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {specialist.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {specialist.nextAvailable}
                          </span>
                        </div>
                      </div>
                      <Button>
                        {specialist.nextAvailable.includes('Emergency') ? 'Get Directions' : 'Book Appointment'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <p className="text-sm text-yellow-800">
                <strong>Medical Disclaimer:</strong> This assessment is for informational purposes only and should not replace professional medical advice. 
                Always consult with a qualified healthcare provider for proper diagnosis and treatment.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DiagnosisChecker;