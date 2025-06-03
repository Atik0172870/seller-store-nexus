
// Core User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'seller' | 'admin' | 'affiliate';
  isVerified: boolean;
  phone?: string;
  avatar?: string;
  loyaltyPoints: number;
  createdAt: string;
}

// Product and Store Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  attributes: Record<string, string>;
  stock: number;
  sellerId: string;
  sellerName: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  status: 'active' | 'inactive' | 'out_of_stock';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  parentId?: string;
  attributes: CategoryAttribute[];
  image?: string;
}

export interface CategoryAttribute {
  id: string;
  name: string;
  type: 'text' | 'select' | 'multiselect' | 'number' | 'boolean';
  options?: string[];
  required: boolean;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  logo?: string;
  banner?: string;
  ownerId: string;
  isVerified: boolean;
  rating: number;
  policies: {
    shipping: string;
    return: string;
    privacy: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  subscription: SubscriptionPlan;
  createdAt: string;
}

// Order and Payment Types
export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: string;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  commission: number;
  shippingAddress: Address;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  sellerId: string;
  sellerName: string;
  quantity: number;
  price: number;
  attributes: Record<string, string>;
}

export interface Address {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Subscription and Commission Types
export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: 'monthly' | 'yearly';
  features: string[];
  commissionRate: number;
  productLimit: number;
  storageLimit: number;
}

export interface Commission {
  id: string;
  orderId: string;
  sellerId: string;
  amount: number;
  rate: number;
  status: 'pending' | 'paid';
  createdAt: string;
}

// Reviews and Ratings
export interface Review {
  id: string;
  productId: string;
  customerId: string;
  customerName: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: string;
  helpful: number;
}

// Campaign and Promotion Types
export interface Campaign {
  id: string;
  name: string;
  type: 'flash_sale' | 'discount' | 'bogo' | 'free_shipping';
  description: string;
  startDate: string;
  endDate: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  minPurchase?: number;
  maxDiscount?: number;
  products: string[];
  isActive: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  minPurchase?: number;
  maxDiscount?: number;
  usageLimit: number;
  usedCount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

// Loyalty and Affiliate Types
export interface LoyaltyTransaction {
  id: string;
  userId: string;
  points: number;
  type: 'earned' | 'redeemed';
  description: string;
  orderId?: string;
  createdAt: string;
}

export interface Affiliate {
  id: string;
  userId: string;
  code: string;
  commissionRate: number;
  totalEarnings: number;
  totalReferrals: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

// Support and Communication Types
export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'order' | 'product' | 'payment' | 'technical' | 'other';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

// Analytics and Reports
export interface AnalyticsData {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  conversionRate: number;
  topProducts: Product[];
  salesByMonth: { month: string; sales: number }[];
  ordersByStatus: { status: string; count: number }[];
}

// Warehouse and Logistics
export interface Warehouse {
  id: string;
  name: string;
  address: Address;
  capacity: number;
  currentStock: number;
  isActive: boolean;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  apiUrl: string;
  isActive: boolean;
  supportedAreas: string[];
  rates: { weight: number; price: number }[];
}

// Gift Cards and Auctions
export interface GiftCard {
  id: string;
  code: string;
  amount: number;
  balance: number;
  purchaserId?: string;
  recipientEmail?: string;
  isActive: boolean;
  expiryDate: string;
  createdAt: string;
}

export interface Auction {
  id: string;
  productId: string;
  startPrice: number;
  currentBid: number;
  highestBidderId?: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'ended';
  bids: AuctionBid[];
}

export interface AuctionBid {
  id: string;
  auctionId: string;
  bidderId: string;
  amount: number;
  createdAt: string;
}
