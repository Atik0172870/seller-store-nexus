
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const DisputeManagement = () => {
  const [disputes] = useState([
    { id: 'D001', orderId: 'ORD-001', customer: 'John Doe', seller: 'Tech Store', reason: 'Item not received', status: 'open', amount: 89.99, date: '2024-06-01' },
    { id: 'D002', orderId: 'ORD-002', customer: 'Jane Smith', seller: 'Fashion Hub', reason: 'Wrong item sent', status: 'mediation', amount: 129.50, date: '2024-06-02' },
    { id: 'D003', orderId: 'ORD-003', customer: 'Mike Johnson', seller: 'Home Goods', reason: 'Damaged product', status: 'resolved', amount: 45.00, date: '2024-06-03' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dispute Management</h1>
          <p className="text-gray-600">Handle customer-seller disputes and conflicts</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2" />
                Open Disputes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{disputes.filter(d => d.status === 'open').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                In Mediation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{disputes.filter(d => d.status === 'mediation').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Resolved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{disputes.filter(d => d.status === 'resolved').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Avg Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2 days</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Active Disputes</CardTitle>
            <CardDescription>Manage ongoing disputes between customers and sellers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Dispute ID</th>
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Seller</th>
                    <th className="text-left p-3">Reason</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {disputes.map((dispute) => (
                    <tr key={dispute.id} className="border-b">
                      <td className="p-3">{dispute.id}</td>
                      <td className="p-3">{dispute.orderId}</td>
                      <td className="p-3">{dispute.customer}</td>
                      <td className="p-3">{dispute.seller}</td>
                      <td className="p-3">{dispute.reason}</td>
                      <td className="p-3">${dispute.amount}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          dispute.status === 'open' ? 'bg-red-100 text-red-800' :
                          dispute.status === 'mediation' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {dispute.status}
                        </span>
                      </td>
                      <td className="p-3">{dispute.date}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Mediate</Button>
                          <Button variant="outline" size="sm" className="text-green-600">Resolve</Button>
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
              <CardTitle>Dispute Categories</CardTitle>
              <CardDescription>Common dispute reasons and resolutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Item not received</span>
                  <span className="text-sm text-gray-600">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Wrong item sent</span>
                  <span className="text-sm text-gray-600">25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Damaged product</span>
                  <span className="text-sm text-gray-600">20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Not as described</span>
                  <span className="text-sm text-gray-600">15%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Resolution Guidelines</CardTitle>
              <CardDescription>Standard procedures for dispute resolution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="font-medium">Step 1: Investigation</h3>
                  <p className="text-sm text-gray-600">Review order details and communication history</p>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <h3 className="font-medium">Step 2: Mediation</h3>
                  <p className="text-sm text-gray-600">Facilitate communication between parties</p>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <h3 className="font-medium">Step 3: Resolution</h3>
                  <p className="text-sm text-gray-600">Implement agreed solution or platform decision</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DisputeManagement;
