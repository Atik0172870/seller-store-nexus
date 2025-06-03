
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Store, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Settings,
  BarChart3,
  Package,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats] = useState({
    totalSellers: 1250,
    totalCustomers: 15420,
    totalOrders: 8965,
    totalRevenue: 245680,
    monthlyCommission: 18420,
    activeCampaigns: 23,
    pendingApprovals: 45,
    disputesCases: 12
  });

  const recentSellers = [
    { id: "S001", name: "Tech Solutions Ltd", status: "pending", joinDate: "2024-06-01", revenue: 2500 },
    { id: "S002", name: "Fashion Hub", status: "approved", joinDate: "2024-05-28", revenue: 4200 },
    { id: "S003", name: "Home Decor Plus", status: "approved", joinDate: "2024-05-25", revenue: 1800 },
  ];

  const topPerformers = [
    { name: "Electronics World", revenue: 25400, commission: 3810, orders: 156 },
    { name: "Fashion Central", revenue: 18900, commission: 2835, orders: 98 },
    { name: "Sports Corner", revenue: 15600, commission: 2340, orders: 87 },
  ];

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle className="text-red-600">Access Denied</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This page is only accessible to admin accounts.</p>
              <Link to="/" className="text-purple-600 hover:text-purple-700">
                Go back to homepage
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Platform overview and management controls</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sellers</CardTitle>
              <Store className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSellers.toLocaleString()}</div>
              <p className="text-xs text-blue-600">+28 new this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCustomers.toLocaleString()}</div>
              <p className="text-xs text-purple-600">+186 new this week</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
              <CreditCard className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyCommission.toLocaleString()}</div>
              <p className="text-xs text-orange-600">+8.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{stats.pendingApprovals}</div>
              <p className="text-sm text-gray-600 mb-4">Seller applications awaiting review</p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                Review Applications
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Active Disputes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{stats.disputesCases}</div>
              <p className="text-sm text-gray-600 mb-4">Customer-seller disputes to resolve</p>
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Manage Disputes
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <TrendingUp className="h-5 w-5 mr-2" />
                Active Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{stats.activeCampaigns}</div>
              <p className="text-sm text-gray-600 mb-4">Marketing campaigns running</p>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                Manage Campaigns
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Seller Applications */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 mr-2" />
                Recent Seller Applications
              </CardTitle>
              <CardDescription>New sellers waiting for approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSellers.map((seller) => (
                  <div key={seller.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{seller.name}</p>
                      <p className="text-sm text-gray-600">ID: {seller.id}</p>
                      <p className="text-xs text-gray-500">Applied: {seller.joinDate}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        seller.status === 'approved' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {seller.status}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">${seller.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Top Performing Sellers */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Top Performing Sellers
              </CardTitle>
              <CardDescription>Highest revenue generators this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((seller, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{seller.name}</p>
                      <p className="text-sm text-gray-600">{seller.orders} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${seller.revenue.toLocaleString()}</p>
                      <p className="text-sm text-green-600">Commission: ${seller.commission}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Sellers
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Admin Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Button className="h-16 bg-blue-500 hover:bg-blue-600">
              <Users className="h-5 w-5 mr-2" />
              Manage Users
            </Button>
            <Button className="h-16 bg-green-500 hover:bg-green-600">
              <Package className="h-5 w-5 mr-2" />
              Product Categories
            </Button>
            <Button className="h-16 bg-purple-500 hover:bg-purple-600">
              <TrendingUp className="h-5 w-5 mr-2" />
              Analytics
            </Button>
            <Button className="h-16 bg-orange-500 hover:bg-orange-600">
              <CreditCard className="h-5 w-5 mr-2" />
              Payments
            </Button>
            <Button className="h-16 bg-gray-500 hover:bg-gray-600">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
