
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, TrendingUp, Users } from 'lucide-react';

const ProductRecommendations = () => {
  const [recommendations] = useState([
    { type: 'Frequently Bought Together', products: ['Wireless Mouse', 'Keyboard', 'Mouse Pad'], conversionRate: 15.8 },
    { type: 'Customers Who Viewed This Also Viewed', products: ['Laptop Stand', 'USB Hub', 'Webcam'], conversionRate: 12.3 },
    { type: 'Similar Products', products: ['Gaming Headset', 'Wireless Earbuds', 'Bluetooth Speaker'], conversionRate: 9.7 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Product Recommendation Engine</h1>
          <p className="text-gray-600">AI-powered product suggestions to increase sales</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI Models
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Avg Conversion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.6%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Revenue Uplift
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+23%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                User Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Recommendation Types</CardTitle>
              <CardDescription>Different AI recommendation models and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{rec.type}</h3>
                      <span className="text-sm text-green-600 font-medium">{rec.conversionRate}% CVR</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Example products: {rec.products.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Model Configuration</CardTitle>
              <CardDescription>Tune your recommendation algorithms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Collaborative Filtering</h3>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Enable user-based recommendations</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Include item-based suggestions</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Content-Based Filtering</h3>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Category similarity</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Price range matching</span>
                      <input type="checkbox" className="toggle" />
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Recommendation Limits</h3>
                  <div className="space-y-2">
                    <div>
                      <label className="text-sm">Maximum recommendations per page</label>
                      <input type="number" defaultValue="6" className="w-full mt-1 p-2 border rounded" />
                    </div>
                    <div>
                      <label className="text-sm">Minimum confidence score</label>
                      <input type="number" defaultValue="0.7" step="0.1" className="w-full mt-1 p-2 border rounded" />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Update Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
