
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Share, TrendingUp } from 'lucide-react';

const AffiliateProgram = () => {
  const [affiliates] = useState([
    { id: 'A001', name: 'John Doe', code: 'JOHN123', commissionRate: 10, totalEarnings: 1250.50, totalReferrals: 45, status: 'active' },
    { id: 'A002', name: 'Jane Smith', code: 'JANE456', commissionRate: 8, totalEarnings: 890.25, totalReferrals: 32, status: 'active' },
    { id: 'A003', name: 'Mike Johnson', code: 'MIKE789', commissionRate: 12, totalEarnings: 2100.75, totalReferrals: 78, status: 'inactive' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Affiliate Program</h1>
            <p className="text-gray-600">Manage affiliate partners and commissions</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Add Affiliate
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Active Affiliates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{affiliates.filter(a => a.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${affiliates.reduce((sum, a) => sum + a.totalEarnings, 0).toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share className="h-5 w-5 mr-2" />
                Total Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{affiliates.reduce((sum, a) => sum + a.totalReferrals, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Avg Commission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Affiliate Partners</CardTitle>
            <CardDescription>Manage your affiliate network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Affiliate Name</th>
                    <th className="text-left p-3">Code</th>
                    <th className="text-left p-3">Commission Rate</th>
                    <th className="text-left p-3">Total Earnings</th>
                    <th className="text-left p-3">Referrals</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {affiliates.map((affiliate) => (
                    <tr key={affiliate.id} className="border-b">
                      <td className="p-3 font-medium">{affiliate.name}</td>
                      <td className="p-3 font-mono">{affiliate.code}</td>
                      <td className="p-3">{affiliate.commissionRate}%</td>
                      <td className="p-3">${affiliate.totalEarnings.toFixed(2)}</td>
                      <td className="p-3">{affiliate.totalReferrals}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          affiliate.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {affiliate.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Pay</Button>
                          <Button variant="outline" size="sm" className="text-red-600">Suspend</Button>
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

export default AffiliateProgram;
