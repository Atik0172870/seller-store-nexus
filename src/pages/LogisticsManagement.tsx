
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, MapPin, Clock } from 'lucide-react';

const LogisticsManagement = () => {
  const [deliveryPartners] = useState([
    { id: '1', name: 'RedX', status: 'active', coverage: 'Nationwide', avgDelivery: '2-3 days' },
    { id: '2', name: 'Sundarban Courier', status: 'active', coverage: 'Dhaka & Chittagong', avgDelivery: '1-2 days' },
    { id: '3', name: 'SA Paribahan', status: 'inactive', coverage: 'Dhaka Metro', avgDelivery: '24 hours' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Logistics Management</h1>
          <p className="text-gray-600">Manage delivery partners and shipping</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Active Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Pending Shipments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Coverage Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">64</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Avg Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5 days</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Delivery Partners</CardTitle>
            <CardDescription>Manage your logistics partners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deliveryPartners.map((partner) => (
                <div key={partner.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{partner.name}</h3>
                    <p className="text-sm text-gray-600">Coverage: {partner.coverage}</p>
                    <p className="text-sm text-gray-600">Avg Delivery: {partner.avgDelivery}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      partner.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {partner.status}
                    </span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogisticsManagement;
