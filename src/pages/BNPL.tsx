
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Calendar, TrendingUp, DollarSign } from 'lucide-react';

const BNPL = () => {
  const [bnplOrders] = useState([
    { id: 'BNPL001', orderId: 'ORD-001', customer: 'John Doe', amount: 299.99, installments: 3, paid: 1, remaining: 2, nextPayment: '2024-06-15', status: 'active' },
    { id: 'BNPL002', orderId: 'ORD-002', customer: 'Jane Smith', amount: 599.99, installments: 6, paid: 6, remaining: 0, nextPayment: 'Completed', status: 'completed' },
    { id: 'BNPL003', orderId: 'ORD-003', customer: 'Mike Johnson', amount: 199.99, installments: 4, paid: 2, remaining: 2, nextPayment: '2024-06-10', status: 'overdue' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Buy Now Pay Later (BNPL)</h1>
          <p className="text-gray-600">Manage installment payments and EMI plans</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Active Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bnplOrders.filter(b => b.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Total Outstanding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${bnplOrders
                  .filter(b => b.status === 'active' || b.status === 'overdue')
                  .reduce((sum, b) => sum + (b.amount / b.installments * b.remaining), 0)
                  .toFixed(2)}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Overdue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{bnplOrders.filter(b => b.status === 'overdue').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Completion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>BNPL Orders</CardTitle>
            <CardDescription>Manage Buy Now Pay Later installment plans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">BNPL ID</th>
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Total Amount</th>
                    <th className="text-left p-3">Installments</th>
                    <th className="text-left p-3">Progress</th>
                    <th className="text-left p-3">Next Payment</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bnplOrders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="p-3 font-mono">{order.id}</td>
                      <td className="p-3">{order.orderId}</td>
                      <td className="p-3">{order.customer}</td>
                      <td className="p-3">${order.amount.toFixed(2)}</td>
                      <td className="p-3">{order.installments} payments</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{width: `${(order.paid / order.installments) * 100}%`}}
                            ></div>
                          </div>
                          <span className="text-sm">{order.paid}/{order.installments}</span>
                        </div>
                      </td>
                      <td className="p-3">{order.nextPayment}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'overdue' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          {order.status === 'overdue' && (
                            <Button variant="outline" size="sm" className="text-red-600">Remind</Button>
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
              <CardTitle>BNPL Plans</CardTitle>
              <CardDescription>Available installment options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">3-Month Plan</h3>
                  <p className="text-sm text-gray-600">3 equal payments, 0% interest</p>
                  <p className="text-sm text-green-600">Most Popular</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">6-Month Plan</h3>
                  <p className="text-sm text-gray-600">6 equal payments, 2% processing fee</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">12-Month Plan</h3>
                  <p className="text-sm text-gray-600">12 equal payments, 5% processing fee</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Payment Analytics</CardTitle>
              <CardDescription>BNPL performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">On-time Payment Rate</span>
                  <span className="text-sm text-green-600">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Default Rate</span>
                  <span className="text-sm text-red-600">3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: '3%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Average Order Value</span>
                  <span className="text-sm text-blue-600">$366</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '73%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BNPL;
