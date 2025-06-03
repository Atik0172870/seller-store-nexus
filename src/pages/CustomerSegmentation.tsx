
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, TrendingUp, Mail } from 'lucide-react';

const CustomerSegmentation = () => {
  const [segments] = useState([
    { id: 'SEG001', name: 'High-Value Customers', criteria: 'LTV > $1000', customers: 125, revenue: 85000, campaigns: 3 },
    { id: 'SEG002', name: 'Frequent Buyers', criteria: 'Orders > 10/month', customers: 340, revenue: 45000, campaigns: 5 },
    { id: 'SEG003', name: 'New Customers', criteria: 'Account < 30 days', customers: 89, revenue: 8900, campaigns: 2 },
    { id: 'SEG004', name: 'At-Risk Customers', criteria: 'No purchase in 90 days', customers: 67, revenue: 0, campaigns: 1 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Customer Segmentation</h1>
            <p className="text-gray-600">Analyze and target customer groups effectively</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Create Segment
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Total Segments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{segments.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Segmented Customers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{segments.reduce((sum, s) => sum + s.customers, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Segment Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${segments.reduce((sum, s) => sum + s.revenue, 0).toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Active Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{segments.reduce((sum, s) => sum + s.campaigns, 0)}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>Defined customer groups and their characteristics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Segment Name</th>
                    <th className="text-left p-3">Criteria</th>
                    <th className="text-left p-3">Customers</th>
                    <th className="text-left p-3">Revenue</th>
                    <th className="text-left p-3">Avg Order Value</th>
                    <th className="text-left p-3">Active Campaigns</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {segments.map((segment) => (
                    <tr key={segment.id} className="border-b">
                      <td className="p-3 font-medium">{segment.name}</td>
                      <td className="p-3 text-sm text-gray-600">{segment.criteria}</td>
                      <td className="p-3">{segment.customers}</td>
                      <td className="p-3">${segment.revenue.toLocaleString()}</td>
                      <td className="p-3">
                        ${segment.customers > 0 ? (segment.revenue / segment.customers).toFixed(2) : '0.00'}
                      </td>
                      <td className="p-3">{segment.campaigns}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Target</Button>
                          <Button variant="outline" size="sm">Edit</Button>
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
              <CardTitle>Segmentation Strategies</CardTitle>
              <CardDescription>Common customer grouping methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Behavioral Segmentation</h3>
                  <p className="text-sm text-gray-600">Based on purchase history, browsing patterns</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Purchase Frequency</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Cart Abandonment</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Value-Based Segmentation</h3>
                  <p className="text-sm text-gray-600">Grouped by customer lifetime value and spending</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">High Value</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Potential Value</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Lifecycle Segmentation</h3>
                  <p className="text-sm text-gray-600">Based on customer journey stage</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">New</span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">At Risk</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Segment Performance</CardTitle>
              <CardDescription>Revenue contribution by segment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {segments.map((segment) => {
                  const totalRevenue = segments.reduce((sum, s) => sum + s.revenue, 0);
                  const percentage = totalRevenue > 0 ? (segment.revenue / totalRevenue) * 100 : 0;
                  
                  return (
                    <div key={segment.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{segment.name}</span>
                        <span className="text-sm text-gray-600">{percentage.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" 
                          style={{width: `${percentage}%`}}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{segment.customers} customers</span>
                        <span>${segment.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
