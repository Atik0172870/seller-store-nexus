
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Store, Users, TrendingUp, DollarSign } from 'lucide-react';

const MultiVendor = () => {
  const [vendors] = useState([
    { id: 'V001', name: 'Tech Store', owner: 'John Doe', products: 45, sales: 1250.75, commission: 5, status: 'active', joinDate: '2024-01-15' },
    { id: 'V002', name: 'Fashion Hub', owner: 'Jane Smith', products: 78, sales: 2100.50, commission: 3, status: 'active', joinDate: '2024-02-10' },
    { id: 'V003', name: 'Home Goods', owner: 'Mike Johnson', products: 32, sales: 890.25, commission: 5, status: 'pending', joinDate: '2024-06-01' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Multi-Vendor Management</h1>
            <p className="text-gray-600">Manage all vendors and their storefronts</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Add Vendor
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 mr-2" />
                Active Vendors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vendors.filter(v => v.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Pending Approval
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vendors.filter(v => v.status === 'pending').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Total Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vendors.reduce((sum, v) => sum + v.products, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Total Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${vendors.reduce((sum, v) => sum + v.sales, 0).toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Vendor Directory</CardTitle>
            <CardDescription>All registered vendors and their information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Store Name</th>
                    <th className="text-left p-3">Owner</th>
                    <th className="text-left p-3">Products</th>
                    <th className="text-left p-3">Total Sales</th>
                    <th className="text-left p-3">Commission</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Join Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.id} className="border-b">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{vendor.name}</div>
                          <div className="text-sm text-gray-600">{vendor.id}</div>
                        </div>
                      </td>
                      <td className="p-3">{vendor.owner}</td>
                      <td className="p-3">{vendor.products}</td>
                      <td className="p-3">${vendor.sales.toFixed(2)}</td>
                      <td className="p-3">{vendor.commission}%</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          vendor.status === 'active' ? 'bg-green-100 text-green-800' :
                          vendor.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {vendor.status}
                        </span>
                      </td>
                      <td className="p-3">{vendor.joinDate}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                          {vendor.status === 'pending' && (
                            <Button variant="outline" size="sm" className="text-green-600">Approve</Button>
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

export default MultiVendor;
