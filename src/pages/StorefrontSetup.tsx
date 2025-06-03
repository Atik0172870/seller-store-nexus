
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Store, Palette, Upload, Eye, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StorefrontSetup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [storeData, setStoreData] = useState({
    storeName: '',
    storeDescription: '',
    storeSlogan: '',
    storeUrl: '',
    bannerImage: '',
    logoImage: '',
    primaryColor: '#8B5CF6',
    secondaryColor: '#3B82F6',
    aboutUs: '',
    returnPolicy: '',
    shippingPolicy: '',
    contactEmail: '',
    contactPhone: '',
    businessAddress: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStoreData({ ...storeData, [e.target.name]: e.target.value });
  };

  const handleColorChange = (colorType: string, color: string) => {
    setStoreData({ ...storeData, [colorType]: color });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!storeData.storeName || !storeData.storeDescription || !storeData.storeUrl) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Mock save - in real app, this would send to API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Storefront saved successfully!",
        description: "Your store is now live and ready for customers.",
      });
      
      navigate('/seller-dashboard');
    } catch (error) {
      toast({
        title: "Failed to save storefront",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const generateStoreUrl = () => {
    const baseUrl = storeData.storeName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    setStoreData({ ...storeData, storeUrl: baseUrl });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Setup Your Storefront
          </h1>
          <p className="text-gray-600">
            Customize your store to reflect your brand and attract customers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Store Basics */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 mr-2" />
                Store Information
              </CardTitle>
              <CardDescription>Basic information about your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name *</Label>
                  <Input
                    id="storeName"
                    name="storeName"
                    placeholder="My Awesome Store"
                    value={storeData.storeName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeUrl">Store URL *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      amarproduct.com/
                    </span>
                    <Input
                      id="storeUrl"
                      name="storeUrl"
                      placeholder="my-store"
                      value={storeData.storeUrl}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                      required
                    />
                    <Button
                      type="button"
                      onClick={generateStoreUrl}
                      className="rounded-l-none"
                      variant="outline"
                    >
                      Generate
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeSlogan">Store Slogan</Label>
                <Input
                  id="storeSlogan"
                  name="storeSlogan"
                  placeholder="Your catchy slogan here"
                  value={storeData.storeSlogan}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeDescription">Store Description *</Label>
                <Textarea
                  id="storeDescription"
                  name="storeDescription"
                  placeholder="Describe what your store offers..."
                  value={storeData.storeDescription}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Visual Branding */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Visual Branding
              </CardTitle>
              <CardDescription>Customize your store's appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Colors */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      id="primaryColor"
                      value={storeData.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="w-12 h-12 border border-gray-300 rounded-md cursor-pointer"
                    />
                    <Input
                      value={storeData.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      id="secondaryColor"
                      value={storeData.secondaryColor}
                      onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                      className="w-12 h-12 border border-gray-300 rounded-md cursor-pointer"
                    />
                    <Input
                      value={storeData.secondaryColor}
                      onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              {/* Image Uploads */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Store Logo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Upload your store logo</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                    <Button type="button" variant="outline" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Banner Image</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Upload banner image</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                    <Button type="button" variant="outline" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Store Policies */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Store Policies & Contact</CardTitle>
              <CardDescription>Important information for your customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutUs">About Us</Label>
                <Textarea
                  id="aboutUs"
                  name="aboutUs"
                  placeholder="Tell customers about your business..."
                  value={storeData.aboutUs}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="returnPolicy">Return Policy</Label>
                  <Textarea
                    id="returnPolicy"
                    name="returnPolicy"
                    placeholder="Describe your return policy..."
                    value={storeData.returnPolicy}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingPolicy">Shipping Policy</Label>
                  <Textarea
                    id="shippingPolicy"
                    name="shippingPolicy"
                    placeholder="Describe your shipping policy..."
                    value={storeData.shippingPolicy}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    placeholder="contact@yourstore.com"
                    value={storeData.contactEmail}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    placeholder="+1 (555) 123-4567"
                    value={storeData.contactPhone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessAddress">Business Address</Label>
                  <Input
                    id="businessAddress"
                    name="businessAddress"
                    placeholder="123 Business St, City"
                    value={storeData.businessAddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button type="button" variant="outline" className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              Preview Store
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex items-center">
              <Save className="h-4 w-4 mr-2" />
              Save Storefront
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StorefrontSetup;
