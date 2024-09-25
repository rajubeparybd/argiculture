import { v4 as uuidv4 } from 'uuid';
// Import images from the folder
import wheatImg from '../assets/images/wheat.jpg';
import cornImg from '../assets/images/corn.jpg';
import riceImg from '../assets/images/rice.jpg';
import barleyImg from '../assets/images/barley.jpg';
import soybeanImg from '../assets/images/soybean.jpg';
// Add more images as needed

// Use the imported images in the array
const cropImages = [
  wheatImg,
  cornImg,
  riceImg,
  barleyImg,
  soybeanImg,
  // Add more imported images here
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
