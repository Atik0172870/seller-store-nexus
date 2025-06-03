
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Eye, CheckCircle, XCircle } from 'lucide-react';

const OpenBoxDelivery = () => {
  const [deliveries] = useState([
    { id: 'OBD001', orderId: 'ORD-001', customer: 'John Doe', product: 'Wireless Headphones', status: 'pending_inspection', deliveryDate: '2024-06-03', inspector: 'Agent A' },
    { id: 'OBD002', orderId: 'ORD-002', product: 'Smart Watch', customer: 'Jane Smith', status: 'accepted', deliveryDate: '2024-06-02', inspector: 'Agent B' },
    { id: 'OBD003', orderId: 'ORD-003', product: 'Bluetooth Speaker', customer: 'Mike Johnson', status: 'rejected', deliveryDate: '2024-06-01', inspector: 'Agent C' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Open Box Delivery</h1>
          <p className="text-gray-600">Manage product inspection before delivery acceptance</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Pending Inspection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{deliveries.filter(d => d.status === 'pending_inspection').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Accepted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{deliveries.filter(d => d.status === 'accepted').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <XCircle className="h-5 w-5 mr-2" />
                Rejected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{deliveries.filter(d => d.status === 'rejected').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Acceptance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Open Box Deliveries</CardTitle>
            <CardDescription>Track product inspection status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Delivery ID</th>
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Product</th>
                    <th className="text-left p-3">Inspector</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Delivery Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveries.map((delivery) => (
                    <tr key={delivery.id} className="border-b">
                      <td className="p-3 font-mono">{delivery.id}</td>
                      <td className="p-3">{delivery.orderId}</td>
                      <td className="p-3">{delivery.customer}</td>
                      <td className="p-3">{delivery.product}</td>
                      <td className="p-3">{delivery.inspector}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          delivery.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          delivery.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {delivery.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3">{delivery.deliveryDate}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          {delivery.status === 'pending_inspection' && (
                            <>
                              <Button variant="outline" size="sm" className="text-green-600">Accept</Button>
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

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Inspection Guidelines</CardTitle>
              <CardDescription>Standard procedures for product inspection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="font-medium">Physical Condition</h3>
                  <p className="text-sm text-gray-600">Check for any physical damage, scratches, or defects</p>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <h3 className="font-medium">Functionality Test</h3>
                  <p className="text-sm text-gray-600">Verify that the product works as expected</p>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <h3 className="font-medium">Packaging & Accessories</h3>
                  <p className="text-sm text-gray-600">Ensure all accessories and manuals are included</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Return Reasons</CardTitle>
              <CardDescription>Common reasons for delivery rejection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Damaged packaging</span>
                  <span className="text-sm text-gray-600">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Wrong product</span>
                  <span className="text-sm text-gray-600">25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Missing accessories</span>
                  <span className="text-sm text-gray-600">20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Defective product</span>
                  <span className="text-sm text-gray-600">20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OpenBoxDelivery;
