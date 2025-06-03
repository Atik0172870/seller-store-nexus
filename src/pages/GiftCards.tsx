
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, CreditCard, Calendar, TrendingUp } from 'lucide-react';

const GiftCards = () => {
  const [giftCards] = useState([
    { id: 'GC001', code: 'GIFT2024001', amount: 100, balance: 75, purchaser: 'John Doe', recipient: 'jane@email.com', status: 'active', expiryDate: '2024-12-31' },
    { id: 'GC002', code: 'GIFT2024002', amount: 50, balance: 0, purchaser: 'Jane Smith', recipient: 'mike@email.com', status: 'used', expiryDate: '2024-12-31' },
    { id: 'GC003', code: 'GIFT2024003', amount: 200, balance: 200, purchaser: 'Mike Johnson', recipient: 'sarah@email.com', status: 'active', expiryDate: '2025-01-15' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Gift Card System</h1>
            <p className="text-gray-600">Manage gift cards and digital vouchers</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Gift className="h-4 w-4 mr-2" />
            Create Gift Card
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-5 w-5 mr-2" />
                Active Cards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{giftCards.filter(gc => gc.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${giftCards.reduce((sum, gc) => sum + gc.amount, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Remaining Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${giftCards.reduce((sum, gc) => sum + gc.balance, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Redemption Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(((giftCards.reduce((sum, gc) => sum + gc.amount, 0) - giftCards.reduce((sum, gc) => sum + gc.balance, 0)) / giftCards.reduce((sum, gc) => sum + gc.amount, 0)) * 100)}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Gift Card Management</CardTitle>
            <CardDescription>All issued gift cards and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Gift Card Code</th>
                    <th className="text-left p-3">Original Amount</th>
                    <th className="text-left p-3">Current Balance</th>
                    <th className="text-left p-3">Purchaser</th>
                    <th className="text-left p-3">Recipient</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Expiry Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {giftCards.map((giftCard) => (
                    <tr key={giftCard.id} className="border-b">
                      <td className="p-3 font-mono">{giftCard.code}</td>
                      <td className="p-3">${giftCard.amount.toFixed(2)}</td>
                      <td className="p-3 font-semibold">${giftCard.balance.toFixed(2)}</td>
                      <td className="p-3">{giftCard.purchaser}</td>
                      <td className="p-3">{giftCard.recipient}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          giftCard.status === 'active' ? 'bg-green-100 text-green-800' :
                          giftCard.status === 'used' ? 'bg-gray-100 text-gray-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {giftCard.status}
                        </span>
                      </td>
                      <td className="p-3">{giftCard.expiryDate}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">History</Button>
                          {giftCard.status === 'active' && (
                            <Button variant="outline" size="sm" className="text-red-600">Deactivate</Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Gift Card Templates</CardTitle>
              <CardDescription>Pre-designed gift card options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Gift className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium">Birthday Theme</h3>
                  <p className="text-sm text-gray-600">Colorful celebration design</p>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Gift className="h-8 w-8 mx-auto mb-2 text-red-600" />
                  <h3 className="font-medium">Holiday Theme</h3>
                  <p className="text-sm text-gray-600">Festive seasonal design</p>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Gift className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-medium">Corporate Theme</h3>
                  <p className="text-sm text-gray-600">Professional business design</p>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Gift className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-medium">Custom Theme</h3>
                  <p className="text-sm text-gray-600">Upload your own design</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>Gift card performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Monthly Sales</span>
                  <span className="text-sm text-green-600">$2,450</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Average Card Value</span>
                  <span className="text-sm text-blue-600">$117</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Time to First Use</span>
                  <span className="text-sm text-purple-600">5.2 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
