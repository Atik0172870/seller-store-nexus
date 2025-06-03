
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Eye, Target, BarChart3 } from 'lucide-react';

const AdvertisementManagement = () => {
  const [ads] = useState([
    { id: 'AD001', title: 'Summer Sale Banner', type: 'banner', position: 'homepage', status: 'active', impressions: 15420, clicks: 890, ctr: 5.8 },
    { id: 'AD002', title: 'Product Spotlight', type: 'sponsored', position: 'search_results', status: 'active', impressions: 8750, clicks: 445, ctr: 5.1 },
    { id: 'AD003', title: 'Category Promotion', type: 'banner', position: 'category_page', status: 'paused', impressions: 3210, clicks: 125, ctr: 3.9 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Advertisement Management</h1>
            <p className="text-gray-600">Manage sponsored content and banners</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Create Ad
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Monitor className="h-5 w-5 mr-2" />
                Active Ads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ads.filter(a => a.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Total Impressions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ads.reduce((sum, a) => sum + a.impressions, 0).toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Total Clicks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ads.reduce((sum, a) => sum + a.clicks, 0).toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Avg CTR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(ads.reduce((sum, a) => sum + a.ctr, 0) / ads.length).toFixed(1)}%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Advertisement Campaigns</CardTitle>
            <CardDescription>Monitor ad performance and manage campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Ad Title</th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">Position</th>
                    <th className="text-left p-3">Impressions</th>
                    <th className="text-left p-3">Clicks</th>
                    <th className="text-left p-3">CTR</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ads.map((ad) => (
                    <tr key={ad.id} className="border-b">
                      <td className="p-3 font-medium">{ad.title}</td>
                      <td className="p-3 capitalize">{ad.type}</td>
                      <td className="p-3 capitalize">{ad.position.replace('_', ' ')}</td>
                      <td className="p-3">{ad.impressions.toLocaleString()}</td>
                      <td className="p-3">{ad.clicks.toLocaleString()}</td>
                      <td className="p-3">{ad.ctr}%</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          ad.status === 'active' ? 'bg-green-100 text-green-800' :
                          ad.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {ad.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">
                            {ad.status === 'active' ? 'Pause' : 'Resume'}
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvertisementManagement;
