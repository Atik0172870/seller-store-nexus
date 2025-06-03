
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Store, Upload, Eye, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StorefrontSetup = () => {
  const { toast } = useToast();
  const [storeData, setStoreData] = useState({
    storeName: 'My Awesome Store',
    storeDescription: 'Welcome to our amazing store! We offer high-quality products at competitive prices.',
    storeSlogan: 'Quality you can trust',
    contactEmail: 'contact@mystore.com',
    contactPhone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
    businessLicense: 'BL-123456789',
    taxId: 'TAX-987654321',
    returnPolicy: 'We offer 30-day returns on all items in original condition.',
    shippingPolicy: 'Free shipping on orders over $50. Standard delivery takes 3-5 business days.',
    privacyPolicy: 'We respect your privacy and protect your personal information.'
  });

  const [socialMedia, setSocialMedia] = useState({
    facebook: 'https://facebook.com/mystore',
    instagram: 'https://instagram.com/mystore',
    twitter: 'https://twitter.com/mystore',
    youtube: 'https://youtube.com/mystore'
  });

  const [brandColors, setBrandColors] = useState({
    primary: '#7c3aed',
    secondary: '#2563eb',
    accent: '#059669'
  });

  const handleSave = () => {
    toast({
      title: "Storefront saved",
      description: "Your storefront settings have been updated successfully.",
    });
  };

  const handlePreview = () => {
    toast({
      title: "Preview opening",
      description: "Opening storefront preview in a new window...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Storefront Setup</h1>
            <p className="text-gray-600">Customize your online store</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handlePreview}>
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 mr-2" />
                Basic Information
              </CardTitle>
              <CardDescription>Set up your store's basic details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  value={storeData.storeName}
                  onChange={(e) => setStoreData({ ...storeData, storeName: e.target.value })}
                  placeholder="Enter your store name"
                />
              </div>
              
              <div>
                <Label htmlFor="storeSlogan">Store Slogan</Label>
                <Input
                  id="storeSlogan"
                  value={storeData.storeSlogan}
                  onChange={(e) => setStoreData({ ...storeData, storeSlogan: e.target.value })}
                  placeholder="Your catchy slogan"
                />
              </div>
              
              <div>
                <Label htmlFor="storeDescription">Store Description</Label>
                <Textarea
                  id="storeDescription"
                  value={storeData.storeDescription}
                  onChange={(e) => setStoreData({ ...storeData, storeDescription: e.target.value })}
                  placeholder="Describe your store"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How customers can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={storeData.contactEmail}
                  onChange={(e) => setStoreData({ ...storeData, contactEmail: e.target.value })}
                  placeholder="contact@yourstore.com"
                />
              </div>
              
              <div>
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input
                  id="contactPhone"
                  value={storeData.contactPhone}
                  onChange={(e) => setStoreData({ ...storeData, contactPhone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <Label htmlFor="address">Business Address</Label>
                <Textarea
                  id="address"
                  value={storeData.address}
                  onChange={(e) => setStoreData({ ...storeData, address: e.target.value })}
                  placeholder="Your business address"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Business Details */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Business Details</CardTitle>
              <CardDescription>Legal and tax information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="businessLicense">Business License Number</Label>
                <Input
                  id="businessLicense"
                  value={storeData.businessLicense}
                  onChange={(e) => setStoreData({ ...storeData, businessLicense: e.target.value })}
                  placeholder="BL-123456789"
                />
              </div>
              
              <div>
                <Label htmlFor="taxId">Tax ID Number</Label>
                <Input
                  id="taxId"
                  value={storeData.taxId}
                  onChange={(e) => setStoreData({ ...storeData, taxId: e.target.value })}
                  placeholder="TAX-987654321"
                />
              </div>
            </CardContent>
          </Card>

          {/* Branding */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Branding</CardTitle>
              <CardDescription>Customize your store's appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Store Logo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Max size: 2MB, PNG/JPG</p>
                </div>
              </div>
              
              <div>
                <Label>Brand Colors</Label>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div>
                    <Label htmlFor="primary" className="text-sm">Primary</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        id="primary"
                        value={brandColors.primary}
                        onChange={(e) => setBrandColors({ ...brandColors, primary: e.target.value })}
                        className="w-10 h-10 border border-gray-300 rounded"
                      />
                      <Input
                        value={brandColors.primary}
                        onChange={(e) => setBrandColors({ ...brandColors, primary: e.target.value })}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondary" className="text-sm">Secondary</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        id="secondary"
                        value={brandColors.secondary}
                        onChange={(e) => setBrandColors({ ...brandColors, secondary: e.target.value })}
                        className="w-10 h-10 border border-gray-300 rounded"
                      />
                      <Input
                        value={brandColors.secondary}
                        onChange={(e) => setBrandColors({ ...brandColors, secondary: e.target.value })}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="accent" className="text-sm">Accent</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        id="accent"
                        value={brandColors.accent}
                        onChange={(e) => setBrandColors({ ...brandColors, accent: e.target.value })}
                        className="w-10 h-10 border border-gray-300 rounded"
                      />
                      <Input
                        value={brandColors.accent}
                        onChange={(e) => setBrandColors({ ...brandColors, accent: e.target.value })}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Connect your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={socialMedia.facebook}
                  onChange={(e) => setSocialMedia({ ...socialMedia, facebook: e.target.value })}
                  placeholder="https://facebook.com/yourstore"
                />
              </div>
              
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={socialMedia.instagram}
                  onChange={(e) => setSocialMedia({ ...socialMedia, instagram: e.target.value })}
                  placeholder="https://instagram.com/yourstore"
                />
              </div>
              
              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={socialMedia.twitter}
                  onChange={(e) => setSocialMedia({ ...socialMedia, twitter: e.target.value })}
                  placeholder="https://twitter.com/yourstore"
                />
              </div>
              
              <div>
                <Label htmlFor="youtube">YouTube</Label>
                <Input
                  id="youtube"
                  value={socialMedia.youtube}
                  onChange={(e) => setSocialMedia({ ...socialMedia, youtube: e.target.value })}
                  placeholder="https://youtube.com/yourstore"
                />
              </div>
            </CardContent>
          </Card>

          {/* Policies */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Store Policies</CardTitle>
              <CardDescription>Define your store policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="returnPolicy">Return Policy</Label>
                <Textarea
                  id="returnPolicy"
                  value={storeData.returnPolicy}
                  onChange={(e) => setStoreData({ ...storeData, returnPolicy: e.target.value })}
                  placeholder="Describe your return policy"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="shippingPolicy">Shipping Policy</Label>
                <Textarea
                  id="shippingPolicy"
                  value={storeData.shippingPolicy}
                  onChange={(e) => setStoreData({ ...storeData, shippingPolicy: e.target.value })}
                  placeholder="Describe your shipping policy"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="privacyPolicy">Privacy Policy</Label>
                <Textarea
                  id="privacyPolicy"
                  value={storeData.privacyPolicy}
                  onChange={(e) => setStoreData({ ...storeData, privacyPolicy: e.target.value })}
                  placeholder="Describe your privacy policy"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StorefrontSetup;
