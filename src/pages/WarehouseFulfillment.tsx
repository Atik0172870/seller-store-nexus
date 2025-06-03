
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Warehouse, Package, Truck, BarChart3 } from 'lucide-react';

const WarehouseFulfillment = () => {
  const [warehouses] = useState([
    { id: 'WH001', name: 'Central Warehouse', location: 'Dhaka', capacity: 10000, occupied: 7500, orders: 145, status: 'active' },
    { id: 'WH002', name: 'Northern Hub', location: 'Chittagong', capacity: 5000, occupied: 3200, orders: 89, status: 'active' },
    { id: 'WH003', name: 'Southern Center', location: 'Sylhet', capacity: 3000, occupied: 1800, orders: 34, status: 'maintenance' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Warehouse & Fulfillment</h1>
            <p className="text-gray-600">Manage inventory and order fulfillment centers</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Add Warehouse
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Warehouse className="h-5 w-5 mr-2" />
                Active Warehouses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{warehouses.filter(w => w.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Total Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{warehouses.reduce((sum, w) => sum + w.capacity, 0).toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Pending Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{warehouses.reduce((sum, w) => sum + w.orders, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Utilization Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((warehouses.reduce((sum, w) => sum + w.occupied, 0) / warehouses.reduce((sum, w) => sum + w.capacity, 0)) * 100)}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Warehouse Overview</CardTitle>
            <CardDescription>Monitor all fulfillment centers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Warehouse ID</th>
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Location</th>
                    <th className="text-left p-3">Capacity</th>
                    <th className="text-left p-3">Occupied</th>
                    <th className="text-left p-3">Utilization</th>
                    <th className="text-left p-3">Pending Orders</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouses.map((warehouse) => (
                    <tr key={warehouse.id} className="border-b">
                      <td className="p-3 font-mono">{warehouse.id}</td>
                      <td className="p-3 font-medium">{warehouse.name}</td>
                      <td className="p-3">{warehouse.location}</td>
                      <td className="p-3">{warehouse.capacity.toLocaleString()}</td>
                      <td className="p-3">{warehouse.occupied.toLocaleString()}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                (warehouse.occupied / warehouse.capacity) > 0.8 ? 'bg-red-600' :
                                (warehouse.occupied / warehouse.capacity) > 0.6 ? 'bg-yellow-600' :
                                'bg-green-600'
                              }`}
                              style={{width: `${(warehouse.occupied / warehouse.capacity) * 100}%`}}
                            ></div>
                          </div>
                          <span className="text-sm">{Math.round((warehouse.occupied / warehouse.capacity) * 100)}%</span>
                        </div>
                      </td>
                      <td className="p-3">{warehouse.orders}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          warehouse.status === 'active' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {warehouse.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Manage</Button>
                          <Button variant="outline" size="sm">Reports</Button>
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
              <CardTitle>Fulfillment Process</CardTitle>
              <CardDescription>Order processing workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
                  <div>
                    <h3 className="font-medium">Order Received</h3>
                    <p className="text-sm text-gray-600">System assigns to nearest warehouse</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">2</div>
                  <div>
                    <h3 className="font-medium">Picking & Packing</h3>
                    <p className="text-sm text-gray-600">Items collected and packaged</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">3</div>
                  <div>
                    <h3 className="font-medium">Dispatch</h3>
                    <p className="text-sm text-gray-600">Package shipped to customer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Fulfillment efficiency indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Average Processing Time</span>
                  <span className="text-sm text-blue-600">1.2 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Order Accuracy Rate</span>
                  <span className="text-sm text-green-600">99.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '99.2%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Same-Day Shipping Rate</span>
                  <span className="text-sm text-purple-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WarehouseFulfillment;
