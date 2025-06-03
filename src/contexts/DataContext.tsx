
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Product, Order, Category, Store, Campaign, Review, 
  SupportTicket, AnalyticsData, Commission, LoyaltyTransaction,
  Affiliate, Coupon, Warehouse, GiftCard, Auction, Notification,
  SubscriptionPlan, DeliveryPartner, CategoryAttribute
} from '@/types';

interface DataContextType {
  // Products and Categories
  products: Product[];
  categories: Category[];
  stores: Store[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Orders and Cart
  orders: Order[];
  cartItems: { productId: string; quantity: number }[];
  wishlistItems: string[];
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  
  // Campaigns and Promotions
  campaigns: Campaign[];
  coupons: Coupon[];
  addCampaign: (campaign: Omit<Campaign, 'id'>) => void;
  addCoupon: (coupon: Omit<Coupon, 'id'>) => void;
  
  // Reviews and Support
  reviews: Review[];
  supportTickets: SupportTicket[];
  addReview: (review: Omit<Review, 'id' | 'createdAt' | 'helpful'>) => void;
  createSupportTicket: (ticket: Omit<SupportTicket, 'id' | 'createdAt' | 'updatedAt'>) => void;
  
  // Analytics and Reports
  analytics: AnalyticsData;
  commissions: Commission[];
  loyaltyTransactions: LoyaltyTransaction[];
  
  // Affiliates and Loyalty
  affiliates: Affiliate[];
  notifications: Notification[];
  
  // Warehouses and Logistics
  warehouses: Warehouse[];
  deliveryPartners: DeliveryPartner[];
  
  // Gift Cards and Auctions
  giftCards: GiftCard[];
  auctions: Auction[];
  
  // Subscription Plans
  subscriptionPlans: SubscriptionPlan[];
  
  // Search and Filter
  searchProducts: (query: string, filters?: any) => Product[];
  getProductsByCategory: (categoryId: string) => Product[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Mock data
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    attributes: [
      { id: '1', name: 'Brand', type: 'select', options: ['Samsung', 'Apple', 'LG'], required: true },
      { id: '2', name: 'Color', type: 'select', options: ['Black', 'White', 'Silver'], required: true },
      { id: '3', name: 'Warranty', type: 'text', required: false }
    ]
  },
  {
    id: '2',
    name: 'Fashion',
    attributes: [
      { id: '4', name: 'Size', type: 'select', options: ['XS', 'S', 'M', 'L', 'XL'], required: true },
      { id: '5', name: 'Color', type: 'select', options: ['Red', 'Blue', 'Green', 'Black'], required: true },
      { id: '6', name: 'Material', type: 'text', required: false }
    ]
  },
  {
    id: '3',
    name: 'Home & Garden',
    attributes: [
      { id: '7', name: 'Dimensions', type: 'text', required: false },
      { id: '8', name: 'Material', type: 'select', options: ['Wood', 'Metal', 'Plastic'], required: true }
    ]
  }
];

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced features',
    price: 999,
    originalPrice: 1099,
    images: ['/placeholder.svg'],
    category: '1',
    attributes: { Brand: 'Apple', Color: 'Black', Storage: '256GB' },
    stock: 50,
    sellerId: 'seller1',
    sellerName: 'Tech Store',
    rating: 4.8,
    reviewCount: 150,
    tags: ['smartphone', 'apple', 'premium'],
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T15:30:00Z'
  },
  {
    id: '2',
    name: 'Samsung Galaxy Watch',
    description: 'Smart fitness watch with health monitoring',
    price: 299,
    images: ['/placeholder.svg'],
    category: '1',
    attributes: { Brand: 'Samsung', Color: 'Silver', Size: '44mm' },
    stock: 25,
    sellerId: 'seller2',
    sellerName: 'Gadget World',
    rating: 4.5,
    reviewCount: 89,
    tags: ['smartwatch', 'fitness', 'samsung'],
    status: 'active',
    createdAt: '2024-02-10T08:15:00Z',
    updatedAt: '2024-05-20T12:45:00Z'
  },
  {
    id: '3',
    name: 'Designer T-Shirt',
    description: 'Premium cotton t-shirt with unique design',
    price: 49,
    originalPrice: 69,
    images: ['/placeholder.svg'],
    category: '2',
    attributes: { Size: 'M', Color: 'Blue', Material: 'Cotton' },
    stock: 100,
    sellerId: 'seller3',
    sellerName: 'Fashion Hub',
    rating: 4.2,
    reviewCount: 45,
    tags: ['fashion', 'tshirt', 'cotton'],
    status: 'active',
    createdAt: '2024-03-05T14:20:00Z',
    updatedAt: '2024-05-15T09:10:00Z'
  }
];

const mockSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    duration: 'monthly',
    features: ['Up to 100 products', '5% commission', 'Basic support'],
    commissionRate: 5,
    productLimit: 100,
    storageLimit: 1024
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 79,
    duration: 'monthly',
    features: ['Up to 500 products', '3% commission', 'Priority support', 'Analytics'],
    commissionRate: 3,
    productLimit: 500,
    storageLimit: 5120
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    duration: 'monthly',
    features: ['Unlimited products', '1% commission', '24/7 support', 'Advanced analytics'],
    commissionRate: 1,
    productLimit: -1,
    storageLimit: -1
  }
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [categories] = useState<Category[]>(mockCategories);
  const [stores] = useState<Store[]>([]);
  const [orders] = useState<Order[]>([]);
  const [cartItems, setCartItems] = useState<{ productId: string; quantity: number }[]>([]);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [campaigns] = useState<Campaign[]>([]);
  const [coupons] = useState<Coupon[]>([]);
  const [reviews] = useState<Review[]>([]);
  const [supportTickets] = useState<SupportTicket[]>([]);
  const [analytics] = useState<AnalyticsData>({
    totalSales: 125000,
    totalOrders: 450,
    totalCustomers: 1200,
    averageOrderValue: 278,
    conversionRate: 3.2,
    topProducts: mockProducts.slice(0, 3),
    salesByMonth: [
      { month: 'Jan', sales: 15000 },
      { month: 'Feb', sales: 18000 },
      { month: 'Mar', sales: 22000 },
      { month: 'Apr', sales: 25000 },
      { month: 'May', sales: 30000 },
      { month: 'Jun', sales: 35000 }
    ],
    ordersByStatus: [
      { status: 'delivered', count: 350 },
      { status: 'shipped', count: 50 },
      { status: 'pending', count: 30 },
      { status: 'cancelled', count: 20 }
    ]
  });
  const [commissions] = useState<Commission[]>([]);
  const [loyaltyTransactions] = useState<LoyaltyTransaction[]>([]);
  const [affiliates] = useState<Affiliate[]>([]);
  const [notifications] = useState<Notification[]>([]);
  const [warehouses] = useState<Warehouse[]>([]);
  const [deliveryPartners] = useState<DeliveryPartner[]>([]);
  const [giftCards] = useState<GiftCard[]>([]);
  const [auctions] = useState<Auction[]>([]);
  const [subscriptionPlans] = useState<SubscriptionPlan[]>(mockSubscriptionPlans);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, ...updates, updatedAt: new Date().toISOString() }
        : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const addToCart = (productId: string, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const addToWishlist = (productId: string) => {
    setWishlistItems(prev => 
      prev.includes(productId) ? prev : [...prev, productId]
    );
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(id => id !== productId));
  };

  const searchProducts = (query: string, filters?: any): Product[] => {
    return products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const getProductsByCategory = (categoryId: string): Product[] => {
    return products.filter(product => product.category === categoryId);
  };

  const addCampaign = (campaignData: Omit<Campaign, 'id'>) => {
    // Implementation for adding campaign
  };

  const addCoupon = (couponData: Omit<Coupon, 'id'>) => {
    // Implementation for adding coupon
  };

  const addReview = (reviewData: Omit<Review, 'id' | 'createdAt' | 'helpful'>) => {
    // Implementation for adding review
  };

  const createSupportTicket = (ticketData: Omit<SupportTicket, 'id' | 'createdAt' | 'updatedAt'>) => {
    // Implementation for creating support ticket
  };

  return (
    <DataContext.Provider value={{
      products,
      categories,
      stores,
      orders,
      cartItems,
      wishlistItems,
      campaigns,
      coupons,
      reviews,
      supportTickets,
      analytics,
      commissions,
      loyaltyTransactions,
      affiliates,
      notifications,
      warehouses,
      deliveryPartners,
      giftCards,
      auctions,
      subscriptionPlans,
      addProduct,
      updateProduct,
      deleteProduct,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
      searchProducts,
      getProductsByCategory,
      addCampaign,
      addCoupon,
      addReview,
      createSupportTicket
    }}>
      {children}
    </DataContext.Provider>
  );
};
