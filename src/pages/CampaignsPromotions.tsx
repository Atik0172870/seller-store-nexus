
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, Gift, Percent, TrendingUp } from 'lucide-react';

const CampaignsPromotions = () => {
  const [campaigns] = useState([
    { id: 'C001', name: 'Summer Sale', type: 'discount', discount: 25, status: 'active', startDate: '2024-06-01', endDate: '2024-06-30' },
    { id: 'C002', name: 'Flash Friday', type: 'flash_sale', discount: 50, status: 'upcoming', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: 'C003', name: 'Free Shipping Week', type: 'free_shipping', discount: 0, status: 'ended', startDate: '2024-05-20', endDate: '2024-05-27' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Campaigns & Promotions</h1>
            <p className="text-gray-600">Create and manage marketing campaigns</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Create Campaign
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Megaphone className="h-5 w-5 mr-2" />
                Active Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{campaigns.filter(c => c.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-5 w-5 mr-2" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{campaigns.filter(c => c.status === 'upcoming').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Percent className="h-5 w-5 mr-2" />
                Avg Discount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15.8%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>All Campaigns</CardTitle>
            <CardDescription>Manage your marketing campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Campaign Name</th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">Discount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Start Date</th>
                    <th className="text-left p-3">End Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-b">
                      <td className="p-3 font-medium">{campaign.name}</td>
                      <td className="p-3 capitalize">{campaign.type.replace('_', ' ')}</td>
                      <td className="p-3">{campaign.discount > 0 ? `${campaign.discount}%` : 'N/A'}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                          campaign.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="p-3">{campaign.startDate}</td>
                      <td className="p-3">{campaign.endDate}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
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

export default CampaignsPromotions;
