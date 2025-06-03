
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CommissionManagement = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [commissions] = useState([
    { id: 'C001', orderId: 'ORD-001', sellerId: 'S001', amount: 15.99, rate: 5, status: 'pending', date: '2024-06-01' },
    { id: 'C002', orderId: 'ORD-002', sellerId: 'S002', amount: 25.50, rate: 3, status: 'paid', date: '2024-06-02' },
    { id: 'C003', orderId: 'ORD-003', sellerId: 'S003', amount: 8.75, rate: 5, status: 'pending', date: '2024-06-03' }
  ]);

  const totalCommissions = commissions.reduce((sum, c) => sum + c.amount, 0);
  const pendingCommissions = commissions.filter(c => c.status === 'pending');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Commission Management</h1>
          <p className="text-gray-600">Track and manage platform commissions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Total Commissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalCommissions.toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Pending Commissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingCommissions.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,245.67</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Commission History</CardTitle>
            <CardDescription>All platform commission transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Commission ID</th>
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Seller ID</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Rate</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {commissions.map((commission) => (
                    <tr key={commission.id} className="border-b">
                      <td className="p-3">{commission.id}</td>
                      <td className="p-3">{commission.orderId}</td>
                      <td className="p-3">{commission.sellerId}</td>
                      <td className="p-3">${commission.amount}</td>
                      <td className="p-3">{commission.rate}%</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          commission.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {commission.status}
                        </span>
                      </td>
                      <td className="p-3">{commission.date}</td>
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

export default CommissionManagement;
