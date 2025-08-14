// Dummy User Data
export const dummyUser = {
  id: 'user-12345',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  age: 32,
  location: {
    address: '123 Health Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105'
  },
  preferences: {
    notifications: true,
    darkMode: false,
    language: 'en'
  }
};

// Dummy Health Products
export const healthProducts = [
  {
    id: 'prod-001',
    name: 'Vitamin D3 5000 IU',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
    category: 'Vitamins',
    description: 'High-potency vitamin D3 supplement for immune support and bone health',
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    prescriptionRequired: false,
    brand: 'NatureMade',
    ingredients: ['Vitamin D3 (Cholecalciferol)', 'Olive Oil', 'Softgel Capsule'],
    dosage: '1 softgel daily with food',
    warnings: ['Consult healthcare provider if pregnant or nursing']
  },
  {
    id: 'prod-002',
    name: 'Omega-3 Fish Oil 1000mg',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
    category: 'Supplements',
    description: 'EPA/DHA omega-3 fatty acids for heart and brain health',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    prescriptionRequired: false,
    brand: 'Nordic Naturals',
    ingredients: ['Fish Oil', 'EPA', 'DHA', 'Vitamin E'],
    dosage: '2 softgels daily with meals',
    warnings: ['Contains fish (anchovy, sardine, mackerel)']
  },
  {
    id: 'prod-003',
    name: 'Probiotic 50 Billion CFU',
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
    category: 'Digestive Health',
    description: 'High-potency multi-strain probiotic for digestive and immune support',
    rating: 4.9,
    reviews: 2156,
    inStock: true,
    prescriptionRequired: false,
    brand: 'Garden of Life',
    ingredients: ['Lactobacillus acidophilus', 'Bifidobacterium lactis', 'Prebiotic fiber'],
    dosage: '1 capsule daily on empty stomach',
    warnings: ['Refrigerate after opening']
  },
  {
    id: 'prod-004',
    name: 'Digital Blood Pressure Monitor',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    category: 'Medical Devices',
    description: 'Upper arm digital blood pressure monitor with large display',
    rating: 4.6,
    reviews: 567,
    inStock: true,
    prescriptionRequired: false,
    brand: 'Omron',
    features: ['Large display', 'Memory storage', 'Irregular heartbeat detection'],
    warranty: '5-year manufacturer warranty'
  },
  {
    id: 'prod-005',
    name: 'Pain Relief Tablets 500mg',
    price: 12.99,
    originalPrice: 15.99,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
    category: 'Pain Relief',
    description: 'Fast-acting acetaminophen tablets for temporary pain relief',
    rating: 4.5,
    reviews: 342,
    inStock: true,
    prescriptionRequired: false,
    brand: 'Tylenol',
    activeIngredient: 'Acetaminophen 500mg',
    dosage: '1-2 tablets every 4-6 hours',
    warnings: ['Do not exceed 8 tablets in 24 hours']
  }
];

// Dummy Health Services
export const healthServices = [
  {
    id: 'service-001',
    name: 'Telehealth Consultation',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
    category: 'Virtual Care',
    description: '30-minute video consultation with board-certified physician',
    rating: 4.8,
    reviews: 892,
    availability: '24/7',
    specialties: ['General Medicine', 'Dermatology', 'Mental Health'],
    waitTime: 'Usually within 15 minutes'
  },
  {
    id: 'service-002',
    name: 'Lab Test Panel',
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    category: 'Diagnostics',
    description: 'Comprehensive blood panel including cholesterol, glucose, and thyroid',
    rating: 4.7,
    reviews: 445,
    availability: 'Same-day appointments available',
    testTypes: ['Cholesterol', 'Glucose', 'Thyroid', 'Vitamin D', 'B12'],
    turnaroundTime: '1-2 business days'
  },
  {
    id: 'service-003',
    name: 'Physical Therapy Session',
    price: 120.00,
    originalPrice: 150.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    category: 'Rehabilitation',
    description: 'One-hour session with licensed physical therapist',
    rating: 4.9,
    reviews: 678,
    availability: 'Monday-Friday 8AM-6PM',
    specialties: ['Sports Injuries', 'Back Pain', 'Post-surgery Rehab'],
    locations: ['Downtown', 'Uptown', 'Suburban']
  }
];

// Dummy Healthcare Providers
export const healthcareProviders = [
  {
    id: 'provider-001',
    name: 'Dr. Sarah Johnson, MD',
    specialty: 'Family Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    reviews: 1247,
    location: '0.5 miles away',
    availability: 'Today 3:00 PM',
    hospital: 'Family Health Clinic',
    education: 'Harvard Medical School',
    experience: '12 years',
    languages: ['English', 'Spanish'],
    acceptsInsurance: true
  },
  {
    id: 'provider-002',
    name: 'Dr. Michael Chen, DO',
    specialty: 'Internal Medicine',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    reviews: 892,
    location: '1.1 miles away',
    availability: 'Tomorrow 9:00 AM',
    hospital: 'Regional Medical Center',
    education: 'Stanford University',
    experience: '8 years',
    languages: ['English', 'Mandarin'],
    acceptsInsurance: true
  },
  {
    id: 'provider-003',
    name: 'Dr. Lisa Wang, MD',
    specialty: 'Gastroenterology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b9643804?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    reviews: 445,
    location: '1.5 miles away',
    availability: 'Tomorrow 2:00 PM',
    hospital: 'Digestive Health Center',
    education: 'Johns Hopkins University',
    experience: '15 years',
    languages: ['English', 'Cantonese'],
    acceptsInsurance: true
  }
];

// Dummy Pharmacy Locations
export const pharmacyLocations = [
  {
    id: 'pharmacy-001',
    name: 'CVS Pharmacy #4521',
    distance: '0.3 miles',
    rating: 4.5,
    address: '123 Main Street, San Francisco, CA 94105',
    phone: '(415) 555-0123',
    hours: '24/7',
    services: ['Prescription', 'Drive-thru', 'Vaccinations', 'Photo'],
    inStock: true
  },
  {
    id: 'pharmacy-002',
    name: 'Walgreens #8234',
    distance: '0.7 miles',
    rating: 4.2,
    address: '456 Market Street, San Francisco, CA 94105',
    phone: '(415) 555-0456',
    hours: '7AM-10PM',
    services: ['Prescription', 'Drive-thru', 'Vaccinations', 'Beauty'],
    inStock: true
  },
  {
    id: 'pharmacy-003',
    name: 'Rite Aid #1567',
    distance: '1.1 miles',
    rating: 4.1,
    address: '789 Mission Street, San Francisco, CA 94105',
    phone: '(415) 555-0789',
    hours: '8AM-9PM',
    services: ['Prescription', 'Vaccinations', 'Wellness+ Rewards'],
    inStock: true
  }
];

// Dummy Cart Items
export const dummyCartItems = [
  {
    id: 'cart-001',
    name: 'Vitamin D3 5000 IU',
    price: 24.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop',
    category: 'Vitamins',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'cart-002',
    name: 'Omega-3 Fish Oil 1000mg',
    price: 19.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop',
    category: 'Supplements',
    prescriptionRequired: false,
    inStock: true
  }
];

// Dummy Order History
export const dummyOrders = [
  {
    id: 'order-001',
    date: '2024-01-15',
    items: [
      {
        name: 'Pain Relief Tablets',
        quantity: 1,
        price: 12.99
      }
    ],
    total: 12.99,
    status: 'delivered',
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-17'
  },
  {
    id: 'order-002',
    date: '2024-01-10',
    items: [
      {
        name: 'Allergy Relief Tablets',
        quantity: 2,
        price: 15.99
      }
    ],
    total: 31.98,
    status: 'delivered',
    trackingNumber: 'TRK987654321',
    estimatedDelivery: '2024-01-12'
  }
];

// Dummy Search History
export const dummySearchHistory = [
  { query: 'vitamin D', timestamp: '2024-01-20T10:30:00Z', resultsCount: 45 },
  { query: 'blood pressure monitor', timestamp: '2024-01-19T14:15:00Z', resultsCount: 12 },
  { query: 'probiotics', timestamp: '2024-01-18T09:45:00Z', resultsCount: 28 }
];

// Dummy Health Symptoms
export const dummySymptoms = [
  'headache',
  'fever',
  'tired',
  'cough',
  'sore throat',
  'runny nose',
  'chest pain',
  'shortness of breath',
  'stomach pain',
  'nausea',
  'vomiting',
  'rash',
  'itchy skin',
  'back pain',
  'muscle ache'
];

// Dummy Health Conditions
export const dummyConditions = [
  {
    name: 'Common Cold/Flu',
    confidence: 87,
    description: 'Viral upper respiratory infection with systemic symptoms',
    urgency: 'low',
    symptoms: ['headache', 'fever', 'tired', 'cough', 'sore throat']
  },
  {
    name: 'Upper Respiratory Infection',
    confidence: 90,
    description: 'Common viral infection affecting nose, throat, and upper airways',
    urgency: 'low',
    symptoms: ['cough', 'sore throat', 'runny nose']
  },
  {
    name: 'Allergic Dermatitis',
    confidence: 78,
    description: 'Skin reaction likely due to allergen contact or systemic allergy',
    urgency: 'medium',
    symptoms: ['rash', 'itchy skin']
  }
];
