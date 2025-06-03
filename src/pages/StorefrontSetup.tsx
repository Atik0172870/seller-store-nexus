
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Store, Upload, Save, Eye, Palette, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StorefrontSetup = () => {
  const { toast } = useToast();
  const [storeData, setStoreData] = useState({
    storeName: 'My Awesome Store',
    description: 'Welcome to our amazing online store with quality products',
    email: 'contact@mystore.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business St, City, State 12345',
    logo: '/placeholder.svg',
    bannerImage: '/placeholder.svg',
    primaryColor: '#7c3aed',
    secondaryColor: '#3b82f6',
    currency: 'USD',
    timezone: 'America/New_York'
  });

  const [isModified, setIsModified] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setStoreData(prev => ({ ...prev, [field]: value }));
    setIsModified(true);
  };

  const handleUploadLogo = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          toast({
            title: "File too large",
            description: "Please select an image smaller than 5MB.",
            variant: "destructive",
          });
          return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast({
            title: "Invalid file type",
            description: "Please select a valid image file.",
            variant: "destructive",
          });
          return;
        }

        const imageUrl = URL.createObjectURL(file);
        setStoreData(prev => ({ ...prev, logo: imageUrl }));
        setIsModified(true);
        
        toast({
          title: "Logo uploaded",
          description: "Store logo has been updated successfully.",
        });
      }
    };
    input.click();
  };

  const handleUploadBanner = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Validate file size (max 10MB for banner)
        if (file.size > 10 * 1024 * 1024) {
          toast({
            title: "File too large",
            description: "Please select an image smaller than 10MB.",
            variant: "destructive",
          });
          return;
        }

        if (!file.type.startsWith('image/')) {
          toast({
            title: "Invalid file type",
            description: "Please select a valid image file.",
            variant: "destructive",
          });
          return;
        }

        const imageUrl = URL.createObjectURL(file);
        setStoreData(prev => ({ ...prev, bannerImage: imageUrl }));
        setIsModified(true);
        
        toast({
          title: "Banner uploaded",
          description: "Store banner has been updated successfully.",
        });
      }
    };
    input.click();
  };

  const handleSaveChanges = async () => {
    try {
      // Simulate API call to save store data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the data to your backend
      console.log('Saving store data:', storeData);
      
      setIsModified(false);
      toast({
        title: "Changes saved",
        description: "Your storefront settings have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePreviewStore = () => {
    // In a real app, this would open a preview of the storefront
    toast({
      title: "Preview",
      description: "Opening store preview in a new window...",
    });
    
    // Simulate opening preview
    window.open('#', '_blank');
  };

  const handleResetColors = () => {
    setStoreData(prev => ({
      ...prev,
      primaryColor: '#7c3aed',
      secondaryColor: '#3b82f6'
    }));
    setIsModified(true);
    
    toast({
      title: "Colors reset",
      description: "Store colors have been reset to default.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Storefront Setup</h1>
            <p className="text-gray-600">Customize your online store appearance</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              onClick={handlePreviewStore}
              variant="outline"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview Store
            </Button>
            <Button 
              onClick={handleSaveChanges}
              disabled={!isModified}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Store Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 mr-2" />
                Store Information
              </CardTitle>
              <CardDescription>Basic store details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  value={storeData.storeName}
                  onChange={(e) => handleInputChange('storeName', e.target.value)}
                  placeholder="Enter your store name"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Store Description</Label>
                <Textarea
                  id="description"
                  value={storeData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your store"
                  rows={3}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Contact Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={storeData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="contact@store.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={storeData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Business Address</Label>
                <Textarea
                  id="address"
                  value={storeData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your business address"
                  rows={2}
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
              <CardDescription>Upload logos and customize your store's appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Logo Upload */}
              <div>
                <Label>Store Logo</Label>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={storeData.logo} 
                      alt="Store Logo" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <Button 
                    onClick={handleUploadLogo}
                    variant="outline"
                    size="sm"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: 200x200px, max 5MB (PNG, JPG)
                </p>
              </div>

              {/* Banner Upload */}
              <div>
                <Label>Banner Image</Label>
                <div className="mt-2">
                  <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-2">
                    <img 
                      src={storeData.bannerImage} 
                      alt="Store Banner" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <Button 
                    onClick={handleUploadBanner}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Banner
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: 1200x300px, max 10MB (PNG, JPG)
                </p>
              </div>

              {/* Color Scheme */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label>Color Scheme</Label>
                  <Button 
                    onClick={handleResetColors}
                    variant="outline"
                    size="sm"
                  >
                    Reset
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primaryColor" className="text-sm">Primary Color</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <input
                        id="primaryColor"
                        type="color"
                        value={storeData.primaryColor}
                        onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                        className="w-8 h-8 rounded border"
                      />
                      <Input
                        value={storeData.primaryColor}
                        onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondaryColor" className="text-sm">Secondary Color</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <input
                        id="secondaryColor"
                        type="color"
                        value={storeData.secondaryColor}
                        onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                        className="w-8 h-8 rounded border"
                      />
                      <Input
                        value={storeData.secondaryColor}
                        onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Store Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Store Settings
              </CardTitle>
              <CardDescription>Configure store preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <select
                    id="currency"
                    value={storeData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <select
                    id="timezone"
                    value={storeData.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="America/New_York">Eastern Time</option>
                    <option value="America/Chicago">Central Time</option>
                    <option value="America/Denver">Mountain Time</option>
                    <option value="America/Los_Angeles">Pacific Time</option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Paris">Paris</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Store Preview */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Store Preview</CardTitle>
              <CardDescription>See how your store will look to customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="border rounded-lg p-4 bg-gradient-to-r min-h-[200px]"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${storeData.primaryColor}20, ${storeData.secondaryColor}20)` 
                }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={storeData.logo} 
                    alt="Logo Preview" 
                    className="w-12 h-12 rounded object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{storeData.storeName}</h3>
                    <p className="text-sm text-gray-600">{storeData.description}</p>
                  </div>
                </div>
                <div 
                  className="w-full h-20 rounded mb-4 bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${storeData.bannerImage})` }}
                ></div>
                <div className="flex space-x-2">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: storeData.primaryColor }}
                  ></div>
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: storeData.secondaryColor }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button 
                  onClick={handlePreviewStore}
                  variant="outline"
                  className="w-full"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Open Full Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Changes Bar */}
        {isModified && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <Card className="bg-white shadow-lg border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-600">You have unsaved changes</p>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsModified(false)}
                    >
                      Discard
                    </Button>
                    <Button 
                      size="sm"
                      onClick={handleSaveChanges}
                      className="bg-gradient-to-r from-purple-600 to-blue-600"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default StorefrontSetup;
