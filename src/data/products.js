import sofa from '../assets/products/sofa.png';
import dining from '../assets/products/dining.png';
import wardrobe from '../assets/products/wardrobe.png';
import bed from '../assets/products/bed.png';
import dressing from '../assets/products/dressing.png';
import chair from '../assets/products/chair.png';
import tv from '../assets/products/tv.png';
import ac from '../assets/products/ac.png';
import washer from '../assets/products/washer.png';
import phone from '../assets/products/phone.png';
import purifier from '../assets/products/purifier.png';
import mixer from '../assets/products/mixer.png';

export const PRODUCTS = [
  { id: 'sofa', category: 'furniture', name: 'Sectional sofa set', image: sofa },
  { id: 'dining', category: 'furniture', name: '6-seater dining table set', image: dining },
  { id: 'wardrobe', category: 'furniture', name: '4-door wardrobe with mirror', image: wardrobe },
  { id: 'bed', category: 'furniture', name: 'King size upholstered bed', image: bed },
  { id: 'mattress', category: 'furniture', name: 'Memory foam mattress', image: bed },
  { id: 'dressing', category: 'furniture', name: 'Dressing table with LED mirror', image: dressing },
  { id: 'drawers', category: 'furniture', name: '6-drawer chest', image: dressing },
  { id: 'chair', category: 'furniture', name: 'High-back office chair', image: chair },
  { id: 'desk', category: 'furniture', name: 'Height-adjustable desk', image: chair },
  { id: 'bookcase', category: 'furniture', name: 'Solid wood bookcase', image: wardrobe },
  { id: 'shoerack', category: 'furniture', name: 'Shoe rack with seating', image: dining },
  { id: 'sofacumbed', category: 'furniture', name: 'Sofa cum bed', image: sofa },
  { id: 'tv', category: 'electronics', name: '65-inch 4K smart TV', image: tv },
  { id: 'ac', category: 'electronics', name: 'Inverter split AC', image: ac },
  { id: 'washer', category: 'electronics', name: 'Front-load washing machine', image: washer },
  { id: 'phone', category: 'electronics', name: '5G smartphone', image: phone },
  { id: 'tablet', category: 'electronics', name: 'Android tablet', image: phone },
  { id: 'purifier', category: 'electronics', name: 'RO water purifier', image: purifier },
  { id: 'mixer', category: 'electronics', name: 'Heavy-duty mixer grinder', image: mixer },
  { id: 'airfryer', category: 'electronics', name: 'Digital air fryer', image: mixer },
  { id: 'chimney', category: 'electronics', name: 'Kitchen chimney', image: mixer },
  { id: 'stabilizer', category: 'electronics', name: 'AC voltage stabilizer', image: ac },
  { id: 'soundbar', category: 'electronics', name: 'Soundbar with subwoofer', image: tv },
  { id: 'dishwasher', category: 'electronics', name: 'Automatic dishwasher', image: washer },
];

export const FURNITURE = PRODUCTS.filter((p) => p.category === 'furniture');
export const ELECTRONICS = PRODUCTS.filter((p) => p.category === 'electronics');
export const FEATURED = [
  PRODUCTS.find((p) => p.id === 'sofa'),
  PRODUCTS.find((p) => p.id === 'tv'),
  PRODUCTS.find((p) => p.id === 'dining'),
  PRODUCTS.find((p) => p.id === 'ac'),
  PRODUCTS.find((p) => p.id === 'wardrobe'),
  PRODUCTS.find((p) => p.id === 'washer'),
  PRODUCTS.find((p) => p.id === 'bed'),
  PRODUCTS.find((p) => p.id === 'phone'),
];
