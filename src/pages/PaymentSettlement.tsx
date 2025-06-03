
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Calendar, DollarSign, Clock } from 'lucide-react';

const PaymentSettlement = () => {
  const [settlements] = useState([
    { id: 'S001', sellerId: 'SELL001', sellerName: 'Tech Store', amount: 1250.75, commission: 62.54, netAmount: 1188.21, status: 'pending', date: '2024-06-01' },
    { id: 'S002', sellerId: 'SELL002', sellerName: 'Fashion Hub', amount: 890.50, commission: 44.53, netAmount: 845.97, status: 'paid', date: '2024-06-02' },
    { id: 'S003', sellerId: 'SELL003', sellerName: 'Home Goods', amount: 2100.25, commission: 105.01, netAmount: 1995.24, status: 'processing', date: '2024-06-03' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Payment Settlement</h1>
            <p className="text-gray-600">Manage seller payouts and settlements</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Process Payouts
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Total Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${settlements.filter(s => s.status === 'pending').reduce((sum, s) => sum + s.netAmount, 0).toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Total Paid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${settlements.filter(s => s.status === 'paid').reduce((sum, s) => sum + s.netAmount, 0).toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{settlements.filter(s => s.status === 'processing').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Next Payout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">June 7</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Settlement History</CardTitle>
            <CardDescription>Track all seller payouts and settlements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Settlement ID</th>
                    <th className="text-left p-3">Seller</th>
                    <th className="text-left p-3">Gross Amount</th>
                    <th className="text-left p-3">Commission</th>
                    <th className="text-left p-3">Net Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {settlements.map((settlement) => (
                    <tr key={settlement.id} className="border-b">
                      <td className="p-3 font-mono">{settlement.id}</td>
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{settlement.sellerName}</div>
                          <div className="text-sm text-gray-600">{settlement.sellerId}</div>
                        </div>
                      </td>
                      <td className="p-3">${settlement.amount.toFixed(2)}</td>
                      <td className="p-3">-${settlement.commission.toFixed(2)}</td>
                      <td className="p-3 font-semibold">${settlement.netAmount.toFixed(2)}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          settlement.status === 'paid' ? 'bg-green-100 text-green-800' :
                          settlement.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {settlement.status}
                        </span>
                      </td>
                      <td className="p-3">{settlement.date}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          {settlement.status === 'pending' && (
                            <Button variant="outline" size="sm" className="text-green-600">Process</Button>
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
      </div>
    </div>
  );
};

export default PaymentSettlement;
