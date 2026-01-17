import axios from 'axios';

const LITE_API_KEY = process.env.REACT_APP_LITE_API_KEY || 'pt_5d127eb4fa084361b1e38a5f2e2c37';
const LITE_API_BASE = 'https://api.liteapi.travel/v2.0';

export const fetchHotelsByCountry = async (countryCode) => {
  try {
    const response = await axios.get(`${LITE_API_BASE}/data/hotels`, {
      params: {
        countryCode: countryCode.toUpperCase()
      },
      headers: {
        'X-API-Key': LITE_API_KEY
      }
    });
    
    const hotels = response.data.data ? response.data.data.slice(0, 50) : [];
    
    return hotels.map(hotel => ({
      ...hotel,
      price: hotel.price || Math.floor(Math.random() * 300) + 50,
      rating: hotel.rating || (Math.random() * 2 + 3).toFixed(1),
      reviewCount: hotel.reviewCount || Math.floor(Math.random() * 1000),
      images: hotel.images && hotel.images.length > 0 ? hotel.images : [getRandomHotelImage()]
    }));
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return generateMockHotels(countryCode);
  }
};

export const fetchHotelDetail = async (hotelId) => {
  try {
    const response = await axios.get(`${LITE_API_BASE}/data/hotel`, {
      params: {
        hotelId: hotelId
      },
      headers: {
        'X-API-Key': LITE_API_KEY
      }
    });
    
    return response.data.data;
  } catch (error) {
    console.error('Error fetching hotel detail:', error);
    return generateMockHotelDetail(hotelId);
  }
};

export const fetchBlogs = async () => {
  try {
    return generateMockBlogs();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return generateMockBlogs();
  }
};

const generateMockHotels = (countryCode) => {
  const countries = {
    US: ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Las Vegas'],
    GB: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Liverpool'],
    FR: ['Paris', 'Lyon', 'Marseille', 'Nice', 'Bordeaux'],
    DE: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
    IT: ['Rome', 'Milan', 'Venice', 'Florence', 'Naples'],
    ES: ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Malaga'],
    JP: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya'],
    CA: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    AU: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    IN: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
  };
  
  const cities = countries[countryCode] || ['City'];
  
  return Array.from({ length: 25 }, (_, index) => ({
    hotelId: `hotel-${countryCode}-${index + 1}`,
    name: `${cities[index % cities.length]} ${getRandomHotelType()} Hotel`,
    description: `Experience luxury and comfort in the heart of ${cities[index % cities.length]}. This beautiful hotel offers stunning views and premium amenities for both business and leisure travelers.`,
    city: cities[index % cities.length],
    countryCode: countryCode,
    price: Math.floor(Math.random() * 300) + 50,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviewCount: Math.floor(Math.random() * 1000),
    images: [getRandomHotelImage()],
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant', 'Fitness Center', 'Parking', 'Room Service'].slice(0, 3 + Math.floor(Math.random() * 3))
  }));
};

const generateMockHotelDetail = (hotelId) => ({
  hotelId: hotelId,
  name: `Luxury ${getRandomHotelType()} Hotel`,
  description: 'A beautiful hotel offering premium accommodations with stunning views and exceptional service. Perfect for both business and leisure travelers. Our hotel features state-of-the-art amenities and personalized service to ensure a memorable stay.',
  address: '123 Main Street, City Center',
  city: 'Sample City',
  countryCode: 'US',
  price: 199,
  rating: '4.5',
  reviewCount: 427,
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'
  ],
  amenities: [
    'Free WiFi',
    'Swimming Pool',
    'Spa & Wellness Center',
    'Restaurant',
    'Fitness Center',
    'Room Service',
    'Business Center',
    'Parking',
    'Concierge',
    'Laundry Service'
  ],
  roomTypes: [
    { name: 'Standard Room', price: 149, description: 'Comfortable room with basic amenities' },
    { name: 'Deluxe Room', price: 199, description: 'Spacious room with premium features' },
    { name: 'Executive Suite', price: 299, description: 'Luxury suite with separate living area' },
    { name: 'Presidential Suite', price: 499, description: 'Ultimate luxury with premium services' }
  ],
  reviews: [
    {
      author: 'John D.',
      rating: 5,
      comment: 'Excellent service and beautiful rooms! The staff was very helpful and the location was perfect.',
      date: '2024-01-15'
    },
    {
      author: 'Sarah M.',
      rating: 4,
      comment: 'Great location and comfortable stay. Would definitely recommend to others.',
      date: '2024-01-10'
    },
    {
      author: 'Mike R.',
      rating: 5,
      comment: 'Outstanding experience from check-in to check-out. Will be coming back!',
      date: '2024-01-08'
    }
  ]
});

const generateMockBlogs = () => [
  {
    id: 1,
    title: "Top 10 Hidden Beaches in Thailand You Must Visit",
    excerpt: "Discover the most stunning and secluded beaches in Thailand that most tourists never find. From pristine white sands to crystal clear waters...",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400",
    date: "2024-01-15",
    author: "Roamify",
    url: "#",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "A Complete Guide to European Winter Destinations",
    excerpt: "From the snow-capped Alps to the magical Northern Lights, explore the best winter destinations in Europe for an unforgettable seasonal adventure...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    date: "2024-01-10",
    author: "Roamify",
    url: "#",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Budget Travel: How to Explore Japan for Under $50 a Day",
    excerpt: "Learn the secrets of affordable travel in Japan without compromising on experiences. Discover budget accommodations, cheap eats, and free attractions...",
    image: "https://images.unsplash.com/photo-1762794996131-411a49b783a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
    date: "2024-01-05",
    author: "Roamify",
    url: "#",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Cultural Etiquette: Do's and Don'ts in Middle Eastern Countries",
    excerpt: "Essential cultural tips and etiquette guidelines for travelers visiting Middle Eastern destinations. Learn about dress codes, greetings, and social norms...",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400",
    date: "2023-12-28",
    author: "Roamify",
    url: "#",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Adventure Travel: Hiking the Inca Trail to Machu Picchu",
    excerpt: "A comprehensive day-by-day guide to hiking one of the world's most famous trails. Everything you need to know about permits, preparation, and what to expect...",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400",
    date: "2023-12-20",
    author: "Roamify",
    url: "#",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Solo Female Travel: Safety Tips and Destination Recommendations",
    excerpt: "Empowering guide for women traveling alone around the world. Safety tips, recommended destinations, and community resources for solo female travelers...",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400",
    date: "2023-12-15",
    author: "Roamify",
    url: "#",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "Culinary Journey: Best Food Cities in Southeast Asia",
    excerpt: "Explore the vibrant street food scenes and culinary delights across Southeast Asia. From Bangkok's street markets to Hanoi's food stalls...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    date: "2023-12-10",
    author: "Roamify",
    url: "#",
    readTime: "7 min read"
  },
  {
    id: 8,
    title: "Sustainable Travel: How to Be a Responsible Tourist",
    excerpt: "Learn how to minimize your environmental impact while exploring the world. Tips for eco-friendly accommodations, transportation, and activities...",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    date: "2023-12-05",
    author: "Roamify",
    url: "#",
    readTime: "5 min read"
  },
  {
    id: 9,
    title: "Luxury on a Budget: 5-Star Experiences for Less",
    excerpt: "Discover how to enjoy luxury travel experiences without breaking the bank. Tips for finding deals on premium accommodations and exclusive experiences...",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    date: "2023-11-28",
    author: "Roamify",
    url: "#",
    readTime: "6 min read"
  }
];

const getRandomHotelType = () => {
  const types = ['Luxury', 'Boutique', 'Business', 'Resort', 'City', 'Seaside', 'Mountain', 'Historic'];
  return types[Math.floor(Math.random() * types.length)];
};

const getRandomHotelImage = () => {
  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400'
  ];
  return images[Math.floor(Math.random() * images.length)];
};