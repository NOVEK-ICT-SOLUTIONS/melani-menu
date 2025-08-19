import type { MenuItem, Category, Restaurant } from '@/types/menu';

// Restaurant Information - Easy to update from admin
export const restaurantInfo: Restaurant = {
  id: '1',
  name: 'Melani Coffee',
  description: 'Artisanal Coffee & Fresh Eats',
  address: 'Addis Ababa, Ethiopia',
  phone: '+251-911-123456',
  email: 'info@melanicoffee.com',
  hours: '7AM - 7PM Daily',
  rating: 4.8,
  wifi: 'MelaniGuest',
  currency: 'ETB'
};

// Categories - Admin can manage these
export const categories: Category[] = [
  { id: 'coffee', name: 'Coffee', icon: 'Coffee', order: 1, isActive: true },
  { id: 'food', name: 'Food', icon: 'Utensils', order: 2, isActive: true },
  { id: 'pastries', name: 'Pastries', icon: 'Cake', order: 3, isActive: true }
];

// Menu Items - Admin can CRUD these
export const menuItems: MenuItem[] = [
  // Coffee & Beverages
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Rich, full-bodied espresso with notes of dark chocolate and caramel',
    price: 85,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    category: 'coffee',
    subcategory: 'hot',
    isPopular: true,
    isAvailable: true
  },
  {
    id: '2',
    name: 'Melani Special Latte',
    description: 'Our house blend with steamed milk, vanilla, and a touch of cinnamon',
    price: 120,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'coffee',
    subcategory: 'hot',
    isPopular: true,
    isAvailable: true
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Classic Italian cappuccino with perfectly frothed milk',
    price: 95,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    category: 'coffee',
    subcategory: 'hot',
    isAvailable: true
  },
  {
    id: '4',
    name: 'Cold Brew',
    description: 'Smooth, refreshing cold brew steeped for 12 hours',
    price: 90,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
    category: 'coffee',
    subcategory: 'cold',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Iced Latte',
    description: 'Chilled espresso with cold milk and ice',
    price: 100,
    image: 'https://images.pexels.com/photos/4226818/pexels-photo-4226818.jpeg',
    category: 'coffee',
    subcategory: 'cold',
    isAvailable: true
  },
  {
    id: '6',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha with steamed oat milk',
    price: 130,
    image: 'https://images.pexels.com/photos/4226818/pexels-photo-4226818.jpeg',
    category: 'coffee',
    subcategory: 'specialty',
    isNew: true,
    isAvailable: true
  },
  {
    id: '7',
    name: 'Chai Tea Latte',
    description: 'Aromatic blend of spices with steamed milk and honey',
    price: 110,
    image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg',
    category: 'coffee',
    subcategory: 'specialty',
    isAvailable: true
  },

  // Food
  {
    id: '8',
    name: 'Avocado Toast',
    description: 'Fresh avocado on sourdough with cherry tomatoes, feta, and microgreens',
    price: 180,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    category: 'food',
    subcategory: 'breakfast',
    isPopular: true,
    isAvailable: true
  },
  {
    id: '9',
    name: 'Breakfast Sandwich',
    description: 'Scrambled eggs, aged cheddar, and bacon on a brioche bun',
    price: 160,
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    category: 'food',
    subcategory: 'breakfast',
    isAvailable: true
  },
  {
    id: '10',
    name: 'Greek Yogurt Bowl',
    description: 'Creamy Greek yogurt with granola, fresh berries, and honey drizzle',
    price: 140,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    category: 'food',
    subcategory: 'breakfast',
    isAvailable: true
  },
  {
    id: '11',
    name: 'Quinoa Salad',
    description: 'Mixed greens, quinoa, roasted vegetables, and tahini dressing',
    price: 220,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'food',
    subcategory: 'lunch',
    isAvailable: true
  },
  {
    id: '12',
    name: 'Grilled Panini',
    description: 'Turkey, swiss, spinach, and sun-dried tomato pesto on ciabatta',
    price: 190,
    image: 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg',
    category: 'food',
    subcategory: 'lunch',
    isAvailable: true
  },

  // Pastries & Desserts
  {
    id: '13',
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky croissant filled with rich dark chocolate',
    price: 75,
    image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg',
    category: 'pastries',
    subcategory: 'pastries',
    isPopular: true,
    isAvailable: true
  },
  {
    id: '14',
    name: 'Blueberry Muffin',
    description: 'Fresh-baked muffin bursting with plump blueberries',
    price: 65,
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
    category: 'pastries',
    subcategory: 'pastries',
    isAvailable: true
  },
  {
    id: '15',
    name: 'New York Cheesecake',
    description: 'Creamy cheesecake with graham cracker crust and berry compote',
    price: 150,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'pastries',
    subcategory: 'desserts',
    isAvailable: true
  },
  {
    id: '16',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 170,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
    category: 'pastries',
    subcategory: 'desserts',
    isAvailable: true
  }
];

// Subcategories mapping - Admin can manage these
export const subcategories = {
  coffee: [
    { id: 'hot', label: 'Hot Coffee' },
    { id: 'cold', label: 'Cold Drinks' },
    { id: 'specialty', label: 'Specialty' }
  ],
  food: [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' }
  ],
  pastries: [
    { id: 'pastries', label: 'Fresh Pastries' },
    { id: 'desserts', label: 'Desserts' }
  ]
};