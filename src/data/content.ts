export type PropertyType = 'Villa' | 'Penthouse' | 'Estate' | 'Mansion' | 'Chateau';

export type Location = 'Monteverde Bay' | 'Ridge Highlands' | 'Coastal Enclave';

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  priceDisplay: string;
  location: Location;
  address: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  lotSize: string;
  yearBuilt: number;
  featured: boolean;
  offMarket: boolean;
  hasVirtualTour: boolean;
  hasDroneFootage: boolean;
  heroImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  amenities: string[];
  sustainability: string[];
  floorPlanName: string;
  neighborhood: {
    name: string;
    description: string;
    highlights: string[];
  };
  coordinates: { lat: number; lng: number };
  privateInfo: {
    passwordHint: string;
    documents: string[];
    qualificationRequirements: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientType: string;
  quote: string;
  fullStory: string;
  outcome: string;
  rating: number;
  hasVideo: boolean;
  propertyType: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  tags: string[];
}

export const locations: Location[] = ['Monteverde Bay', 'Ridge Highlands', 'Coastal Enclave'];
export const propertyTypes: PropertyType[] = ['Villa', 'Penthouse', 'Estate', 'Mansion', 'Chateau'];
export const allAmenities = [
  'Infinity Pool', 'Wine Cellar', 'Helipad', 'Smart Home', 'Ocean View',
  'Private Beach', 'Home Theater', 'Spa & Wellness', 'Tennis Court', 'Private Gym',
  'Staff Quarters', 'Underground Garage', 'Rooftop Terrace', 'Climate Cellar',
  'Private Dock', 'Solar Panels', 'Garden Estate', 'Security System', 'Elevator',
  'Library', 'Chef\'s Kitchen', 'Butler\'s Pantry', 'Guest House', 'Fountain Courtyard',
];

export const properties: Property[] = [
  {
    id: '1',
    slug: 'azure-horizon-villa',
    title: 'Azure Horizon Villa',
    subtitle: 'A waterfront masterpiece suspended between sky and sea',
    price: 45000000,
    priceDisplay: '€45,000,000',
    location: 'Coastal Enclave',
    address: '7 Cliffside Terrace, Coastal Enclave',
    type: 'Villa',
    bedrooms: 7,
    bathrooms: 9,
    sqm: 1450,
    lotSize: '2.4 hectares',
    yearBuilt: 2024,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://ibb.co/GQfQtM2x',
    galleryImages: [
      'https://ibb.co/GQfQtM2x',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
    ],
    description: 'A sculptural waterfront villa with panoramic ocean views, private beach access, and architectural significance that rivals the world\'s finest residences.',
    longDescription: 'Azure Horizon Villa is a triumph of contemporary architecture, where every line and surface is designed to frame the horizon. Spanning 1,450 square meters across three levels, the residence cascades down the cliffside in a series of cantilevered terraces that dissolve the boundary between interior and exterior. Floor-to-ceiling glass walls retract seamlessly, inviting the ocean breeze and golden light into every room. The infinity pool appears to merge with the sea beyond, creating an optical phenomenon that must be experienced to be understood. Designed by the acclaimed architect Soren Lindqvist, this is not merely a home — it is a meditation on the relationship between luxury and nature.',
    amenities: ['Infinity Pool', 'Ocean View', 'Private Beach', 'Wine Cellar', 'Smart Home', 'Home Theater', 'Spa & Wellness', 'Private Gym', 'Staff Quarters', 'Helipad', 'Rooftop Terrace', 'Private Dock'],
    sustainability: ['Solar Panels', 'Geothermal heating & cooling', 'Rainwater harvesting', 'Locally sourced stone & timber', 'LEED Platinum certified'],
    floorPlanName: 'Azure Horizon — Full Floor Plans',
    neighborhood: {
      name: 'Coastal Enclave',
      description: 'An ultra-private stretch of coastline reserved for fewer than thirty estates. The Coastal Enclave offers unparalleled seclusion with private beach access, a guarded single-entry road, and proximity to the Monteverde Bay Yacht Club.',
      highlights: ['Private beach access', '24/7 security patrol', 'Yacht Club membership eligible', '10 minutes to Monteverde Bay marina', 'Exclusive coastal restaurants nearby'],
    },
    coordinates: { lat: 42.4250, lng: 8.5630 },
    privateInfo: {
      passwordHint: 'Provided after NDA execution',
      documents: ['Full architectural plans', 'Structural engineering report', 'Appliance inventory', 'Staff retention options', 'Financing arrangements'],
      qualificationRequirements: 'Proof of funds or pre-approval letter required. NDA must be executed prior to private showing. Minimum qualification: €50M liquid assets verified.',
    },
  },
  {
    id: '2',
    slug: 'celeste-penthouse',
    title: 'Celeste Penthouse',
    subtitle: 'The crown jewel of Monteverde Bay\'s skyline',
    price: 28000000,
    priceDisplay: '€28,000,000',
    location: 'Monteverde Bay',
    address: '1 Marina Crest Tower, Monteverde Bay',
    type: 'Penthouse',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 680,
    lotSize: 'Full floor + rooftop terrace',
    yearBuilt: 2023,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600304550793-2c7f1c5e5c5e?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600304550793-2c7f1c5e5c5e?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0f?w=1600&q=85',
      'https://images.unsplash.com/photo-1600565753376-42c2a858c78c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4f1c6e5b9d8c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A full-floor penthouse with 360-degree views, private rooftop terrace with plunge pool, and the finest finishes available in any residential property.',
    longDescription: 'Occupying the entire 42nd floor of the prestigious Marina Crest Tower, the Celeste Penthouse is a statement of arrival. The private elevator opens directly into a grand salon with double-height ceilings and unobstructed views of the bay, the marina, and the distant mountains. Italian marble floors flow throughout, while walls are clad in silk and hand-finished plaster. The rooftop terrace — accessible via a sculptural floating staircase — features a heated plunge pool, outdoor kitchen, and fire lounge. This is the most significant penthouse to become available in Monteverde Bay in over a decade.',
    amenities: ['Infinity Pool', 'Ocean View', 'Wine Cellar', 'Smart Home', 'Home Theater', 'Private Gym', 'Elevator', 'Climate Cellar', 'Rooftop Terrace', 'Security System', 'Chef\'s Kitchen', 'Butler\'s Pantry'],
    sustainability: ['Solar Panels', 'Triple-glazed thermal windows', 'Energy recovery ventilation', 'Green roof terrace', 'BREEAM Excellent certified'],
    floorPlanName: 'Celeste Penthouse — Floor Plans',
    neighborhood: {
      name: 'Marina Crest District',
      description: 'The most coveted address in Monteverde Bay, the Marina Crest District is home to only twelve ultra-luxury towers, each limited to a single residence per floor. Walking distance to the marina, fine dining, and the cultural quarter.',
      highlights: ['Private elevator access', 'Concierge & valet service', 'Walk to Marina & fine dining', 'Helipad access on tower roof', 'Cultural quarter 5 minutes away'],
    },
    coordinates: { lat: 42.4400, lng: 8.5800 },
    privateInfo: {
      passwordHint: 'Provided after qualification',
      documents: ['Floor plans & elevations', 'HOA financials', 'Appliance & finish schedule', 'Concierge service agreement', 'Parking & storage assignments'],
      qualificationRequirements: 'Proof of funds required. Building board approval necessary. Minimum qualification: €30M liquid assets verified with bank reference.',
    },
  },
  {
    id: '3',
    slug: 'highland-manor-estate',
    title: 'Highland Manor Estate',
    subtitle: 'A generational estate on the Ridge Highlands',
    price: 38000000,
    priceDisplay: '€38,000,000',
    location: 'Ridge Highlands',
    address: '42 Ridgecrest Road, Ridge Highlands',
    type: 'Estate',
    bedrooms: 9,
    bathrooms: 11,
    sqm: 2200,
    lotSize: '12 hectares',
    yearBuilt: 2021,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=90',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=85',
    ],
    description: 'A sprawling 12-hectare estate with a main manor, guest house, equestrian facilities, and a championship tennis court set against mountain ridge views.',
    longDescription: 'Highland Manor Estate is a property of rare scale and ambition. The main manor, inspired by the great country houses of Europe, spans 2,200 square meters and has been meticulously restored with every modern convenience concealed behind hand-crafted period details. The estate includes a separate four-bedroom guest house, a professional equestrian center with stabling for eight horses, an all-weather tennis pavilion, and manicured gardens designed by the landscape architect Elise Moreau. A long private drive approaches through an avenue of century-old oaks, ensuring absolute privacy and a sense of theatrical arrival.',
    amenities: ['Tennis Court', 'Wine Cellar', 'Smart Home', 'Spa & Wellness', 'Private Gym', 'Staff Quarters', 'Underground Garage', 'Garden Estate', 'Security System', 'Library', 'Guest House', 'Fountain Courtyard', 'Helipad'],
    sustainability: ['Solar Panels', 'Ground-source heat pump', 'Natural spring water supply', 'Organic gardens & orchard', 'Biodiversity-certified grounds'],
    floorPlanName: 'Highland Manor — Complete Estate Plans',
    neighborhood: {
      name: 'Ridge Highlands',
      description: 'The Ridge Highlands is an exclusive hillside community of large-lot estates, each with minimum 8-hectare parcels. Known for its privacy, equestrian trails, and panoramic views of the valley below.',
      highlights: ['Equestrian trail network', 'Private gated access', 'Panoramic ridge views', '15 minutes to Monteverde Bay', 'Helipad permitted'],
    },
    coordinates: { lat: 42.4600, lng: 8.5500 },
    privateInfo: {
      passwordHint: 'Provided after NDA',
      documents: ['Estate survey & boundaries', 'Equestrian facility plans', 'Staff contracts', 'Garden maintenance records', 'Historical restoration documentation'],
      qualificationRequirements: 'Proof of funds required. NDA executed prior to viewing. Minimum qualification: €50M liquid assets. Estate viewing by appointment only.',
    },
  },
  {
    id: '4',
    slug: 'maison-lumiere',
    title: 'Maison Lumière',
    subtitle: 'A modernist chateau bathed in golden light',
    price: 32000000,
    priceDisplay: '€32,000,000',
    location: 'Monteverde Bay',
    address: '18 Lumière Lane, Monteverde Bay',
    type: 'Chateau',
    bedrooms: 8,
    bathrooms: 10,
    sqm: 1850,
    lotSize: '5 hectares',
    yearBuilt: 2022,
    featured: true,
    offMarket: true,
    hasVirtualTour: true,
    hasDroneFootage: false,
    heroImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
    ],
    description: 'An off-market modernist chateau with a glass atrium, formal gardens, and a climate-controlled wine cellar holding 3,000 bottles.',
    longDescription: 'Maison Lumière is a private off-market offering, available exclusively through Marcus Hale\'s network. The residence is a bold reinterpretation of the French chateau form, rendered in limestone, glass, and bronze. The central atrium — a five-story glass rotunda — floods the interior with natural light throughout the day, creating an ever-changing play of shadow and warmth. The formal gardens, designed in the classical French style, extend over 3 hectares and include a labyrinth, a rose garden with 200 varieties, and a reflecting pool that mirrors the chateau\'s façade.',
    amenities: ['Wine Cellar', 'Smart Home', 'Home Theater', 'Spa & Wellness', 'Private Gym', 'Staff Quarters', 'Garden Estate', 'Security System', 'Library', 'Chef\'s Kitchen', 'Butler\'s Pantry', 'Fountain Courtyard', 'Elevator'],
    sustainability: ['Solar Panels', 'Passive solar design', 'Rainwater collection', 'Heritage limestone construction', 'Organic garden & vineyard'],
    floorPlanName: 'Maison Lumière — Architectural Plans',
    neighborhood: {
      name: 'Old Monteverde',
      description: 'The historic heart of Monteverde Bay, characterized by tree-lined lanes, heritage estates, and proximity to the cultural district, museums, and the Grand Opera House.',
      highlights: ['Walk to Grand Opera House', 'Heritage district protection', 'Private lane access', '5 minutes to fine dining', 'Cultural institutions nearby'],
    },
    coordinates: { lat: 42.4350, lng: 8.5750 },
    privateInfo: {
      passwordHint: 'Off-market — NDA required',
      documents: ['Architectural drawings', 'Wine cellar inventory', 'Garden & landscape plans', 'Staff arrangements', 'Heritage compliance records'],
      qualificationRequirements: 'Strictly off-market. NDA mandatory. Proof of funds €40M minimum. Introduction via existing client referral or Marcus Hale direct screening.',
    },
  },
  {
    id: '5',
    slug: 'the-pavilion-residence',
    title: 'The Pavilion Residence',
    subtitle: 'Architectural minimalism meets coastal serenity',
    price: 18500000,
    priceDisplay: '€18,500,000',
    location: 'Coastal Enclave',
    address: '23 Serenity Cove, Coastal Enclave',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 720,
    lotSize: '1.8 hectares',
    yearBuilt: 2023,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A minimalist villa defined by clean lines, a 25-meter lap pool, and seamless indoor-outdoor living spaces overlooking a private cove.',
    longDescription: 'The Pavilion Residence is an exercise in restraint and precision. Every element has been considered, every material selected for its honesty and longevity. The home unfolds as a series of pavilions connected by covered walkways, each oriented to capture specific views and light conditions. The great room — a single 180-square-meter space — opens entirely to the pool deck and ocean beyond through a 12-meter sliding glass wall. Materials are deliberately limited: travertine, white oak, blackened steel, and hand-troweled plaster. The result is a home that feels both monumental and intimate.',
    amenities: ['Infinity Pool', 'Ocean View', 'Smart Home', 'Wine Cellar', 'Private Gym', 'Rooftop Terrace', 'Security System', 'Chef\'s Kitchen', 'Solar Panels'],
    sustainability: ['Solar Panels', 'Cross-ventilation design', 'Recycled aggregate concrete', 'Native drought-tolerant landscaping', 'Net-zero energy capable'],
    floorPlanName: 'Pavilion Residence — Plans',
    neighborhood: {
      name: 'Serenity Cove',
      description: 'A secluded cove within the Coastal Enclave, home to ten architecturally significant villas. Shared private path to a sheltered beach with crystal-clear water.',
      highlights: ['Private cove beach', 'Architecturally significant community', 'Walking trails', '8 minutes to Monteverde Bay', 'Protected marine reserve adjacent'],
    },
    coordinates: { lat: 42.4280, lng: 8.5610 },
    privateInfo: {
      passwordHint: 'Provided after qualification',
      documents: ['Architectural plans', 'Material specifications', 'Smart home system docs', 'Pool & landscape plans', 'Energy performance certificate'],
      qualificationRequirements: 'Proof of funds or pre-approval required. Minimum qualification: €25M liquid assets.',
    },
  },
  {
    id: '6',
    slug: 'meridian-tower-mansion',
    title: 'Meridian Tower Mansion',
    subtitle: 'A vertical mansion with private sky garden',
    price: 22500000,
    priceDisplay: '€22,500,000',
    location: 'Monteverde Bay',
    address: '88 Meridian Boulevard, Monteverde Bay',
    type: 'Mansion',
    bedrooms: 6,
    bathrooms: 8,
    sqm: 950,
    lotSize: 'Two full floors',
    yearBuilt: 2024,
    featured: false,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600565753376-42c2a858c78c?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600565753376-42c2a858c78c?w=1600&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A two-floor vertical mansion in the new Meridian Tower, featuring a private internal elevator, sky garden, and dual-kitchen configuration.',
    longDescription: 'The Meridian Tower Mansion redefines high-rise living by combining the space and privacy of a ground-level mansion with the security and views of a tower residence. Occupying the 35th and 36th floors, the home is connected by a private glass elevator and internal staircase. The lower floor is dedicated to entertaining — a grand salon, formal dining room, and chef\'s kitchen with butler\'s pantry. The upper floor is a private sanctuary with six bedroom suites, a family room, and a spectacular sky garden with mature trees, a water feature, and outdoor lounging areas.',
    amenities: ['Smart Home', 'Home Theater', 'Private Gym', 'Elevator', 'Wine Cellar', 'Security System', 'Chef\'s Kitchen', 'Butler\'s Pantry', 'Rooftop Terrace', 'Staff Quarters'],
    sustainability: ['Solar Panels', 'Double-skin façade', 'Energy recovery ventilation', 'Sky garden biodiversity', 'WELL Gold certified'],
    floorPlanName: 'Meridian Mansion — Dual Floor Plans',
    neighborhood: {
      name: 'Meridian District',
      description: 'The newest ultra-luxury district in Monteverde Bay, the Meridian District features three landmark towers with world-class amenities, private health club, and direct access to the waterfront promenade.',
      highlights: ['Private health club', 'Waterfront promenade access', '24/7 concierge', 'Valet parking', '5 minutes to marina'],
    },
    coordinates: { lat: 42.4420, lng: 8.5790 },
    privateInfo: {
      passwordHint: 'Provided after qualification',
      documents: ['Dual floor plans', 'Tower amenity schedule', 'Finish specifications', 'Parking & storage', 'Concierge service details'],
      qualificationRequirements: 'Proof of funds required. Tower board approval. Minimum qualification: €30M liquid assets.',
    },
  },
  {
    id: '7',
    slug: 'verdant-ridge-retreat',
    title: 'Verdant Ridge Retreat',
    subtitle: 'A glass-and-timber sanctuary in the highland forest',
    price: 15500000,
    priceDisplay: '€15,500,000',
    location: 'Ridge Highlands',
    address: '67 Forest Ridge Trail, Ridge Highlands',
    type: 'Estate',
    bedrooms: 4,
    bathrooms: 5,
    sqm: 560,
    lotSize: '8 hectares',
    yearBuilt: 2023,
    featured: false,
    offMarket: true,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'An off-market forest retreat blending seamlessly into the highland canopy, with a green roof, natural spring, and panoramic valley views.',
    longDescription: 'Verdant Ridge Retreat is an off-market offering for the discerning buyer who values privacy above all. The home is nearly invisible from any distance, its green roof and timber cladding allowing it to merge with the surrounding forest. Inside, the aesthetic is warm and organic — reclaimed timber beams, stone fireplaces, and walls of glass that frame the forest canopy like living paintings. A natural spring feeds a cascading water feature that runs through the property, and a small lake sits at the valley edge. This is a home for someone who has everything and wants nothing but peace.',
    amenities: ['Smart Home', 'Wine Cellar', 'Spa & Wellness', 'Garden Estate', 'Security System', 'Library', 'Chef\'s Kitchen', 'Solar Panels', 'Private Gym'],
    sustainability: ['Solar Panels', 'Green roof integration', 'Natural spring water', 'Reclaimed & FSC-certified timber', 'Off-grid capable', 'Protected forest covenant'],
    floorPlanName: 'Verdant Ridge — Site & Floor Plans',
    neighborhood: {
      name: 'Forest Ridge',
      description: 'The most private area of the Ridge Highlands, Forest Ridge is a heavily wooded enclave with minimum 6-hectare lots, protected by a conservation covenant that preserves the forest canopy in perpetuity.',
      highlights: ['Conservation covenant protection', 'Natural springs & lake', 'Private forest trails', '20 minutes to Monteverde Bay', 'Absolute seclusion'],
    },
    coordinates: { lat: 42.4700, lng: 8.5450 },
    privateInfo: {
      passwordHint: 'Off-market — NDA required',
      documents: ['Site survey', 'Conservation covenant', 'Spring water rights', 'Forest management plan', 'Off-grid systems documentation'],
      qualificationRequirements: 'Off-market only. NDA mandatory. Proof of funds €20M minimum. Screening by Marcus Hale personally.',
    },
  },
  {
    id: '8',
    slug: 'grand-esplanade-palace',
    title: 'Grand Esplanade Palace',
    subtitle: 'A Beaux-Arts masterpiece restored to perfection',
    price: 41000000,
    priceDisplay: '€41,000,000',
    location: 'Monteverde Bay',
    address: '5 Esplanade Square, Monteverde Bay',
    type: 'Mansion',
    bedrooms: 10,
    bathrooms: 12,
    sqm: 2600,
    lotSize: '3 hectares (walled)',
    yearBuilt: 1908,
    featured: false,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A fully restored Beaux-Arts mansion on Monteverde Bay\'s most prestigious square, featuring a grand ballroom, formal gardens, and period-correct details throughout.',
    longDescription: 'Grand Esplanade Palace is the most significant historic residence in Monteverde Bay. Built in 1908 for a shipping magnate and meticulously restored over four years, the mansion embodies the grandeur of the Beaux-Arts movement while offering every contemporary comfort. The grand ballroom — with its 8-meter ceilings, hand-painted frescoes, and restored parquet de Versailles flooring — can host 200 guests. The formal gardens have been restored to their original 1910 design, including the fountain courtyard and rose parterre. A full basement level houses a climate-controlled wine cellar, tasting room, home theater, spa, and parking for twelve vehicles.',
    amenities: ['Wine Cellar', 'Smart Home', 'Home Theater', 'Spa & Wellness', 'Staff Quarters', 'Underground Garage', 'Garden Estate', 'Security System', 'Library', 'Chef\'s Kitchen', 'Butler\'s Pantry', 'Guest House', 'Fountain Courtyard', 'Elevator', 'Climate Cellar'],
    sustainability: ['Solar Panels (concealed)', 'Geothermal climate system', 'Heritage restoration materials', 'Organic formal gardens', 'Protected landmark status'],
    floorPlanName: 'Grand Esplanade — Restoration Plans',
    neighborhood: {
      name: 'Esplanade Square',
      description: 'The most prestigious address in Monteverde Bay, Esplanade Square is a private walled square of eight historic mansions, accessible only through a guarded gatehouse. The square overlooks the bay and the Grand Opera House.',
      highlights: ['Private gated square', 'Landmark heritage status', 'Overlooks bay & Opera House', 'Walk to cultural district', 'Unmatched prestige address'],
    },
    coordinates: { lat: 42.4380, lng: 8.5780 },
    privateInfo: {
      passwordHint: 'Provided after qualification',
      documents: ['Restoration documentation', 'Heritage compliance', 'Staff contracts', 'Garden records', 'Ballroom event guidelines'],
      qualificationRequirements: 'Proof of funds required. Heritage board notification. Minimum qualification: €50M liquid assets. Viewing by private appointment only.',
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'A. Whitmore',
    clientRole: 'Technology Entrepreneur',
    clientType: 'Tech Founder',
    quote: 'Marcus didn\'t just find me a property — he found me a home that perfectly matched a life I hadn\'t yet articulated. His discretion is absolute, and his instincts are extraordinary.',
    fullStory: 'When I decided to relocate my family to Monteverde Bay, I spoke with three advisors. Marcus was the only one who asked the right questions — not about budget, but about how we live, how we entertain, what we value. Six weeks later, he presented a property that had never been listed publicly. It was perfect. The negotiation was handled entirely on my behalf, and I never felt the pressure that defines most real estate transactions. Marcus operates at a level I didn\'t know existed in this industry.',
    outcome: 'Acquired an off-market waterfront villa at 12% below market valuation. Transaction completed in 4 weeks with full privacy.',
    rating: 5,
    hasVideo: true,
    propertyType: 'Waterfront Villa',
  },
  {
    id: '2',
    clientName: 'L. Marchetti',
    clientRole: 'International Executive',
    clientType: 'Global Executive',
    quote: 'I have purchased properties in seven countries. Marcus Hale is the only advisor I trust implicitly. His knowledge of the market, his network, and his unwavering commitment to his clients\' interests are without parallel.',
    fullStory: 'As someone who has navigated luxury real estate markets across Europe, Asia, and North America, I have high expectations. Marcus exceeded every one of them. He understood that I needed a property that could serve as both a family residence and a venue for hosting international business partners. He identified the Celeste Penthouse before it was publicly available, arranged a private viewing within 48 hours, and managed every detail of the acquisition while I was traveling. The level of service — from the initial consultation to the post-purchase concierge connections — was flawless.',
    outcome: 'Secured a pre-market penthouse acquisition. Full concierge transition including staff introductions and interior design referrals.',
    rating: 5,
    hasVideo: false,
    propertyType: 'Penthouse',
  },
  {
    id: '3',
    clientName: 'Dr. S. Okonkwo',
    clientRole: 'Healthcare Pioneer',
    clientType: 'Medical Innovator',
    quote: 'Marcus understood that this wasn\'t just a real estate transaction — it was the creation of a legacy. He approached it with the gravity and the artistry it deserved.',
    fullStory: 'My family wanted to establish roots in the Ridge Highlands — a place that would be ours for generations. Marcus spent time with us, visited our current home, and understood the aesthetic and emotional qualities we were seeking. He identified Highland Manor Estate and recognized before we did that it was the one. What impressed me most was his coordination of the due diligence process — every specialist, every inspection, every document was managed with precision. We closed on schedule and have since become close friends. Marcus is more than an advisor; he is a trusted counsel.',
    outcome: 'Legacy estate acquisition with full due diligence management. Ongoing relationship including property management and community introductions.',
    rating: 5,
    hasVideo: true,
    propertyType: 'Country Estate',
  },
  {
    id: '4',
    clientName: 'R. Tanaka',
    clientRole: 'Investment Fund Manager',
    clientType: 'Investor',
    quote: 'Marcus combines the analytical rigor of a financial advisor with the aesthetic eye of an art dealer. He showed me properties that were not only beautiful but sound investments.',
    fullStory: 'My approach to real estate is entirely analytical — I look at it as an asset class within a broader portfolio. Marcus was the first advisor who spoke my language. He presented each property with comparable sales data, rental yield projections, historical appreciation trends, and risk assessments. But he also brought something I couldn\'t quantify — an intuition for which properties would appreciate not just in value, but in desirability. The Pavilion Residence I purchased through him has already appreciated 18% in two years, and more importantly, it has become the most sought-after property in its enclave.',
    outcome: 'Strategic acquisition with 18% appreciation in 24 months. Portfolio diversification across two additional investment properties.',
    rating: 5,
    hasVideo: false,
    propertyType: 'Architectural Villa',
  },
  {
    id: '5',
    clientName: 'M. Volkov',
    clientRole: 'Creative Director',
    clientType: 'Design Connoisseur',
    quote: 'I have spent my career cultivating taste. Marcus Hale is one of the few people in any industry whose taste I trust without question.',
    fullStory: 'Finding a home that meets the standards of someone who designs for a living is nearly impossible. Marcus curated a selection of three properties, each architecturally significant, each with a distinct character. He understood that I wasn\'t looking for luxury features — I was looking for soul. Maison Lumière stopped me in my tracks. The proportion, the light, the materiality — it was a work of art. Marcus negotiated a purchase that respected the property\'s significance and the seller\'s emotional attachment. It was handled with grace and resulted in a relationship I deeply value.',
    outcome: 'Acquired an architecturally significant chateau. Facilitated relationship with original architect for ongoing stewardship.',
    rating: 5,
    hasVideo: false,
    propertyType: 'Chateau',
  },
  {
    id: '6',
    clientName: 'The Hartwell Family',
    clientRole: 'Multi-Generational Family Office',
    clientType: 'Family Office',
    quote: 'Marcus managed the sale of our family estate with a sensitivity that honored three generations of memories, while achieving a result that secured the family\'s financial future.',
    fullStory: 'Selling a family home of 45 years is not a real estate transaction — it is an emotional journey. Marcus understood this from our first conversation. He took time to meet with multiple family members, understand the history of the property, and craft a narrative that honored its significance while positioning it for the right buyer. The marketing was discreet — no public listing, no sign, no open houses. He identified three qualified buyers within his network and managed a process that resulted in a sale price 22% above our expectations. Throughout, he was counselor, strategist, and friend. We cannot recommend him more highly.',
    outcome: 'Discreet off-market sale at 22% above expectation. Three-generation family transition managed with complete privacy.',
    rating: 5,
    hasVideo: true,
    propertyType: 'Family Estate (Sale)',
  },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: '2026-luxury-market-trends-monteverde-bay',
    title: '2026 Luxury Market Trends in Monteverde Bay',
    excerpt: 'A comprehensive analysis of the forces shaping ultra-luxury real estate in Monteverde Bay and the broader Coastal Enclave region for 2026 and beyond.',
    category: 'Market Analysis',
    author: 'Marcus Hale',
    date: 'January 8, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1600304550793-2c7f1c5e5c5e?w=1600&q=85',
    tags: ['Market Trends', 'Investment', 'Monteverde Bay', '2026'],
    content: [
      'The ultra-luxury real estate market in Monteverde Bay enters 2026 with remarkable momentum. After three consecutive years of sustained appreciation, the market shows no signs of cooling — rather, it is maturing in ways that present both opportunities and considerations for high-net-worth buyers and sellers.',
      'The defining characteristic of the 2026 market is scarcity. The Coastal Enclave, with its limited number of waterfront parcels, has effectively reached capacity. No new waterfront lots can be created, and existing owners are holding. This structural scarcity has driven the average price per square meter for waterfront properties to €28,500 — a 14% increase year-over-year. For off-market transactions, which constitute approximately 40% of all ultra-luxury sales in the region, prices are running 8-12% above comparable listed properties.',
      'A second trend worth noting is the emergence of the Ridge Highlands as a destination in its own right. Long considered a secondary market to the waterfront, the Highlands has attracted a new generation of buyers who value privacy, land, and equestrian facilities over ocean views. Average prices in the Ridge Highlands have appreciated 19% in 2025, outpacing the waterfront for the first time. The limited supply of large-parcel estates (8+ hectares) suggests this trend will continue.',
      'From an investment perspective, the Monteverde Bay market offers a compelling value proposition when compared to established ultra-luxury markets. While prices in the Coastal Enclave are substantial, they remain 30-40% below comparable properties in established markets. This gap is narrowing, but it suggests continued appreciation potential for well-located properties.',
      'Looking forward, I expect 2026 to be characterized by continued strength in the ultra-luxury segment, with particular demand for architecturally significant properties, large-parcel estates, and properties with sustainability credentials. The market for generic luxury properties may see some softening, but exceptional properties — those with architectural distinction, unique locations, or irreplaceable features — will continue to appreciate.',
      'For buyers, my advice is to act decisively when the right property is identified. The market does not wait, and the best opportunities are often off-market. For sellers, the environment is favorable, but presentation and discretion remain paramount. The right advisory approach can achieve results that significantly exceed market averages.',
    ],
  },
  // ... (the rest of the articles, marcusBio, contactInfo, navItems, and helper functions)
];

export const marcusBio = {
  name: 'Marcus Hale',
  title: 'Founder & Principal Advisor',
  company: 'Marcus Hale | Private Estates',
  careerSales: '€750M+',
  yearsExperience: 18,
  clientCount: '120+',
  offMarketDeals: '40% of transactions',
  portraitImage: 'https://images.unsplash.com/photo-1560250097-0b93528c312a?w=1600&q=85',
  lifestyleImages: [
    'https://images.unsplash.com/photo-1560472354-b33ff0c94a86?w=1600&q=85',
    'https://images.unsplash.com/photo-1573496359142-b8d87734f5a7?w=1600&q=85',
  ],
  bio: [
    'Marcus Hale is not a real estate agent. He is an advisor, a confidant, and a curator of extraordinary living. For nearly two decades, he has operated at the intersection of wealth, architecture, and aspiration — guiding the world\'s most discerning clients to properties that reflect not just their means, but their vision.',
    'His journey began unconventionally. After building and selling a successful hospitality group in his early thirties, Marcus turned his attention to the world of ultra-luxury real estate — not as a career shift, but as a calling. He recognized that the market for exceptional properties was poorly served: too large, too impersonal, too focused on transactions rather than relationships. He set out to build something different.',
    'What Marcus built is a solo practice — deliberately, defiantly independent. No team of junior agents, no franchise model, no volume targets. Just Marcus, his network, and an unwavering commitment to each client. This approach has resulted in over €750 million in career sales volume, a clientele that spans continents and industries, and a reputation for discretion that is, in the world of ultra-luxury real estate, the ultimate currency.',
    'His philosophy is simple: every client deserves his full attention, every property deserves his full expertise, and every transaction deserves to be handled with absolute discretion. He limits his active client roster to ensure this standard is never compromised. The result is an advisory experience that feels less like a business relationship and more like a partnership.',
  ],
  achievements: [
    '€750M+ in career sales volume',
    '120+ private clients served across 15 countries',
    'Named "Advisor of the Year" — Luxury Property Guild (2024, 2025)',
    'Featured in "The World\'s Top 50 Property Advisors" — Prestige Quarterly',
    '40% of transactions conducted off-market with complete discretion',
    'Average client relationship duration: 7+ years',
    'Speaker, Global Luxury Real Estate Summit (2023, 2024, 2025)',
    'Founding member, Discretionary Advisors Network',
  ],
  philosophy: 'I believe that the right home is not found — it is recognized. My role is to present properties that resonate with who you are and who you are becoming. Everything else — the negotiation, the due diligence, the logistics — is craft. The art is in the matching.',
};

export const contactInfo = {
  email: 'private@marcushale-estates.com',
  phone: '+1 (555) 010-0200',
  address: '1 Promontory Way, Monteverde Bay',
  officeHours: 'By appointment only',
  social: {
    instagram: '@marcushale.privateestates',
    linkedin: 'linkedin.com/in/marcus-hale-private-estates',
  },
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Exclusive Listings', path: '/listings' },
  { label: 'Market Insights', path: '/insights' },
  { label: 'About Marcus', path: '/about' },
  { label: 'Client Experiences', path: '/testimonials' },
  { label: 'Private Access', path: '/portal' },
  { label: 'Contact', path: '/contact' },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getOffMarketProperties(): Property[] {
  return properties.filter((p) => p.offMarket);
}