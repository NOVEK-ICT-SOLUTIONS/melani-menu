export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // Store as number for easy calculation
  image: string;
  category: string;
  subcategory: string;
  isPopular?: boolean;
  isNew?: boolean;
  isAvailable?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  order: number;
  isActive: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  order: number;
  isActive: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  rating: number;
  wifi: string;
  currency: string;
  logo?: string;
}

export interface Comment {
  id: string;
  customerName?: string;
  comment: string;
  rating?: number;
  createdAt: string;
  isApproved: boolean;
}