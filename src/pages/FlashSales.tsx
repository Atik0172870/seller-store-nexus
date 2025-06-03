
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Clock, Percent, TrendingUp } from 'lucide-react';

const FlashSales = () => {
  const [flashSales] = useState([
    { id: 'FS001', name: 'Weekend Electronics Sale', discount: 40, startTime: '2024-06-08 00:00', endTime: '2024-06-09 23:59', status: 'upcoming', products: 15 },
    { id: 'FS002', name: 'Fashion Flash Friday', discount: 60, startTime: '2024-06-07 12:00', endTime: '2024-06-07 18:00', status: 'active', products: 25 },
    { id: 'FS003', name: 'Home & Garden Special', discount: 35, startTime: '2024-06-05 10:00', endTime: '2024-06-05 22:00', status: 'ended', products: 12 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Flash Sales System</h1>
            <p className="text-gray-600">Create and manage limited-time flash sales</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Zap className="h-4 w-4 mr-2" />
            Create Flash Sale
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Active Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{flashSales.filter(s => s.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{flashSales.filter(s => s.status === 'upcoming').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Percent className="h-5 w-5 mr-2" />
                Max Discount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.max(...flashSales.map(s => s.discount))}%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23.5%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Flash Sale Events</CardTitle>
            <CardDescription>Manage your flash sale campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Sale Name</th>
                    <th className="text-left p-3">Discount</th>
                    <th className="text-left p-3">Start Time</th>
                    <th className="text-left p-3">End Time</th>
                    <th className="text-left p-3">Products</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {flashSales.map((sale) => (
                    <tr key={sale.id} className="border-b">
                      <td className="p-3 font-medium">{sale.name}</td>
                      <td className="p-3 font-bold text-red-600">{sale.discount}% OFF</td>
                      <td className="p-3">{sale.startTime}</td>
                      <td className="p-3">{sale.endTime}</td>
                      <td className="p-3">{sale.products} items</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          sale.status === 'active' ? 'bg-green-100 text-green-800' :
                          sale.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {sale.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                          {sale.status === 'upcoming' && (
                            <Button variant="outline" size="sm" className="text-green-600">Start</Button>
                          )}
                          {sale.status === 'active' && (
                            <Button variant="outline" size="sm" className="text-red-600">End</Button>
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

        {/* Countdown Timer for Active Sale */}
        <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Zap className="h-6 w-6 mr-2" />
              FLASH SALE ACTIVE NOW!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">08</div>
                <div className="text-sm opacity-90">Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold">45</div>
                <div className="text-sm opacity-90">Minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">23</div>
                <div className="text-sm opacity-90">Seconds</div>
              </div>
              <div>
                <Button variant="secondary" className="text-red-600 font-bold">
                  Shop Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlashSales;
