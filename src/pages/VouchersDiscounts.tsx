
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Percent, Gift, TrendingUp } from 'lucide-react';

const VouchersDiscounts = () => {
  const [vouchers] = useState([
    { id: 'V001', code: 'SAVE20', discount: 20, type: 'percentage', usageLimit: 100, usedCount: 45, status: 'active', expiryDate: '2024-06-30' },
    { id: 'V002', code: 'FREESHIP', discount: 0, type: 'free_shipping', usageLimit: 500, usedCount: 234, status: 'active', expiryDate: '2024-07-15' },
    { id: 'V003', code: 'WELCOME10', discount: 10, type: 'fixed', usageLimit: 50, usedCount: 50, status: 'expired', expiryDate: '2024-05-31' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Vouchers & Discounts</h1>
            <p className="text-gray-600">Create and manage discount codes</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Create Voucher
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ticket className="h-5 w-5 mr-2" />
                Active Vouchers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vouchers.filter(v => v.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Percent className="h-5 w-5 mr-2" />
                Total Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vouchers.reduce((sum, v) => sum + v.usedCount, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-5 w-5 mr-2" />
                Redemption Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Revenue Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>All Vouchers</CardTitle>
            <CardDescription>Manage your discount vouchers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Voucher Code</th>
                    <th className="text-left p-3">Discount</th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">Usage</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Expiry Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map((voucher) => (
                    <tr key={voucher.id} className="border-b">
                      <td className="p-3 font-mono font-bold">{voucher.code}</td>
                      <td className="p-3">
                        {voucher.type === 'percentage' ? `${voucher.discount}%` :
                         voucher.type === 'fixed' ? `$${voucher.discount}` :
                         'Free Shipping'}
                      </td>
                      <td className="p-3 capitalize">{voucher.type.replace('_', ' ')}</td>
                      <td className="p-3">{voucher.usedCount}/{voucher.usageLimit}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          voucher.status === 'active' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {voucher.status}
                        </span>
                      </td>
                      <td className="p-3">{voucher.expiryDate}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" className="text-red-600">Disable</Button>
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

export default VouchersDiscounts;
