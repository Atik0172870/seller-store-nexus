
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Award, Users } from 'lucide-react';

const LoyaltyProgram = () => {
  const [loyaltyStats] = useState({
    totalMembers: 1250,
    pointsIssued: 125000,
    redemptions: 89,
    activeOffers: 5
  });

  const [tiers] = useState([
    { name: 'Bronze', minPoints: 0, benefits: ['5% discount', 'Free shipping on orders over $50'] },
    { name: 'Silver', minPoints: 1000, benefits: ['10% discount', 'Free shipping', 'Early access to sales'] },
    { name: 'Gold', minPoints: 5000, benefits: ['15% discount', 'Free shipping', 'Priority support', 'Exclusive products'] }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Loyalty Program</h1>
            <p className="text-gray-600">Manage customer loyalty and rewards</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Create Reward
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Total Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loyaltyStats.totalMembers.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Points Issued
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loyaltyStats.pointsIssued.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-5 w-5 mr-2" />
                Redemptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loyaltyStats.redemptions}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Active Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loyaltyStats.activeOffers}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Loyalty Tiers</CardTitle>
              <CardDescription>Manage customer loyalty tiers and benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tiers.map((tier, index) => (
                  <div key={tier.name} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg">{tier.name}</h3>
                      <span className="text-sm text-gray-600">{tier.minPoints}+ points</span>
                    </div>
                    <ul className="space-y-1">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <Star className="h-3 w-3 mr-2 text-yellow-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest loyalty program activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">John Doe earned 50 points</p>
                    <p className="text-sm text-gray-600">Purchase reward</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Jane Smith redeemed 200 points</p>
                    <p className="text-sm text-gray-600">$20 discount</p>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Mike Johnson upgraded to Silver</p>
                    <p className="text-sm text-gray-600">Tier promotion</p>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
