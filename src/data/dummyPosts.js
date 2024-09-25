// src/data/dummyPosts.js
import { v4 as uuidv4 } from 'uuid';

const cropImages = [
  'https://source.unsplash.com/featured/?wheat',
  'https://source.unsplash.com/featured/?corn',
  'https://source.unsplash.com/featured/?rice',
  // Add more image URLs or use placeholder images
];

const cropNames = ['Wheat', 'Corn', 'Rice', 'Barley', 'Soybean'];

const dummyPosts = Array.from({ length: 15 }, (_, index) => ({
  id: uuidv4(),
  image: cropImages[index % cropImages.length],
  name: cropNames[index % cropNames.length],
  description: `High-quality ${cropNames[index % cropNames.length]} available for sale.`,
  contactNumber: '123-456-7890',
  price: (Math.random() * 100).toFixed(2),
  unit: 'kg',
  isUser: index % 5 === 0, // Every 5th post belongs to the user
}));

export default dummyPosts;
