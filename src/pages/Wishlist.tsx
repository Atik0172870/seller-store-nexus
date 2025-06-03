
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  seller: string;
  rating: number;
  inStock: boolean;
}

const Wishlist = () => {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Premium Wireless Earbuds',
      price: 79.99,
      originalPrice: 99.99,
      image: '/placeholder.svg',
      seller: 'Audio Tech',
      rating: 4.6,
      inStock: true
    },
    {
      id: '2',
      name: 'Smart Home Assistant',
      price: 149.99,
      image: '/placeholder.svg',
      seller: 'Smart Devices Co',
      rating: 4.4,
      inStock: true
    },
    {
      id: '3',
      name: 'Professional Camera Lens',
      price: 299.99,
      image: '/placeholder.svg',
      seller: 'Photo Pro',
      rating: 4.8,
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    });
  };

  const addToCart = (item: WishlistItem) => {
    if (!item.inStock) {
      toast({
        title: "Out of stock",
        description: "This item is currently unavailable.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const moveAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    if (inStockItems.length === 0) {
      toast({
        title: "No items available",
        description: "All items in your wishlist are currently out of stock.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Items moved to cart",
      description: `${inStockItems.length} items have been added to your cart.`,
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <Navbar />
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save items you love for later by clicking the heart icon</p>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
            <p className="text-gray-600">{wishlistItems.length} items saved for later</p>
          </div>
          <Button 
            onClick={moveAllToCart}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Move All to Cart
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="relative">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center relative">
                    <ShoppingCart className="h-12 w-12 text-gray-400" />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-gray-900/50 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  </Button>
                </div>
                
                <div>
                  <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
                  <p className="text-sm text-gray-600">by {item.seller}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                    )}
                  </div>
                  {item.originalPrice && (
                    <span className="text-sm text-green-600 font-medium">
                      Save ${(item.originalPrice - item.price).toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => addToCart(item)}
                    disabled={!item.inStock}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => removeFromWishlist(item.id)}
                    className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You might also like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold mb-1">Related Product {i}</h3>
                  <p className="text-sm text-gray-600 mb-2">by Seller Name</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-600">$49.99</span>
                    <Button size="sm" variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
