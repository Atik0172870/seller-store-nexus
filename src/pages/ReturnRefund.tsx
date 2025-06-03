
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, DollarSign, Clock, CheckCircle } from 'lucide-react';

const ReturnRefund = () => {
  const [returns] = useState([
    { id: 'R001', orderId: 'ORD-001', reason: 'Defective product', status: 'pending', amount: 89.99, date: '2024-06-01' },
    { id: 'R002', orderId: 'ORD-002', reason: 'Wrong item', status: 'approved', amount: 129.50, date: '2024-06-02' },
    { id: 'R003', orderId: 'ORD-003', reason: 'Not as described', status: 'rejected', amount: 45.00, date: '2024-06-03' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Return & Refund Management</h1>
          <p className="text-gray-600">Handle customer returns and refunds</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <RotateCcw className="h-5 w-5 mr-2" />
                Total Returns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{returns.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{returns.filter(r => r.status === 'pending').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Approved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{returns.filter(r => r.status === 'approved').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Refund Amount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${returns.filter(r => r.status === 'approved').reduce((sum, r) => sum + r.amount, 0).toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Return Requests</CardTitle>
            <CardDescription>Manage customer return requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Return ID</th>
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Reason</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {returns.map((returnItem) => (
                    <tr key={returnItem.id} className="border-b">
                      <td className="p-3">{returnItem.id}</td>
                      <td className="p-3">{returnItem.orderId}</td>
                      <td className="p-3">{returnItem.reason}</td>
                      <td className="p-3">${returnItem.amount}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          returnItem.status === 'approved' ? 'bg-green-100 text-green-800' :
                          returnItem.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {returnItem.status}
                        </span>
                      </td>
                      <td className="p-3">{returnItem.date}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          {returnItem.status === 'pending' && (
                            <>
                              <Button variant="outline" size="sm" className="text-green-600">Approve</Button>
                              <Button variant="outline" size="sm" className="text-red-600">Reject</Button>
                            </>
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

export default ReturnRefund;
