
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
  rating: number;
  inStock: boolean;
  seller: string;
}

const Wishlist = () => {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: '/placeholder.svg',
      rating: 4.5,
      inStock: true,
      seller: 'Tech Solutions Ltd'
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 199.99,
      image: '/placeholder.svg',
      rating: 4.8,
      inStock: false,
      seller: 'Fitness Central'
    },
    {
      id: '3',
      name: 'Premium Coffee Maker',
      price: 149.99,
      originalPrice: 179.99,
      image: '/placeholder.svg',
      rating: 4.2,
      inStock: true,
      seller: 'Kitchen World'
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
        description: "This item is currently out of stock.",
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
        title: "No available items",
        description: "No items in your wishlist are currently in stock.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart",
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
          <p className="text-gray-600 mb-8">Save items you love for later</p>
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
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
          <Button 
            onClick={moveAllToCart}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Add All to Cart
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="p-4">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingCart className="h-12 w-12 text-gray-400" />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 p-2"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-2">by {item.seller}</p>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                </div>

                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-purple-600">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">${item.originalPrice}</span>
                  )}
                </div>

                {!item.inStock && (
                  <p className="text-red-600 text-sm mb-4">Out of Stock</p>
                )}

                <Button 
                  onClick={() => addToCart(item)}
                  disabled={!item.inStock}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
