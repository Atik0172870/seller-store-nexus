
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Target, BarChart3 } from 'lucide-react';

const DynamicPricing = () => {
  const [pricingRules] = useState([
    { id: 'PR001', name: 'High Demand Surge', trigger: 'demand > 80%', adjustment: '+15%', status: 'active', applied: 12 },
    { id: 'PR002', name: 'Low Stock Premium', trigger: 'stock < 10 units', adjustment: '+10%', status: 'active', applied: 8 },
    { id: 'PR003', name: 'Competitor Match', trigger: 'competitor price < our price', adjustment: 'match -5%', status: 'active', applied: 23 },
    { id: 'PR004', name: 'Seasonal Discount', trigger: 'slow season', adjustment: '-20%', status: 'paused', applied: 0 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dynamic Pricing Engine</h1>
            <p className="text-gray-600">Automated price optimization based on market conditions</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Create Rule
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Active Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pricingRules.filter(r => r.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Price Increases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {pricingRules.filter(r => r.adjustment.includes('+')).reduce((sum, r) => sum + r.applied, 0)}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingDown className="h-5 w-5 mr-2" />
                Price Decreases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {pricingRules.filter(r => r.adjustment.includes('-')).reduce((sum, r) => sum + r.applied, 0)}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Revenue Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">+12.5%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Pricing Rules</CardTitle>
            <CardDescription>Automated pricing strategies and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Rule Name</th>
                    <th className="text-left p-3">Trigger Condition</th>
                    <th className="text-left p-3">Price Adjustment</th>
                    <th className="text-left p-3">Times Applied</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRules.map((rule) => (
                    <tr key={rule.id} className="border-b">
                      <td className="p-3 font-medium">{rule.name}</td>
                      <td className="p-3 text-sm">{rule.trigger}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rule.adjustment.includes('+') ? 'bg-green-100 text-green-800' :
                          rule.adjustment.includes('-') ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {rule.adjustment}
                        </span>
                      </td>
                      <td className="p-3">{rule.applied}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          rule.status === 'active' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {rule.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">
                            {rule.status === 'active' ? 'Pause' : 'Activate'}
                          </Button>
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
              <CardTitle>Market Factors</CardTitle>
              <CardDescription>Real-time data influencing pricing decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Current Demand Level</span>
                  <span className="text-green-600 font-medium">High (85%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Competitor Average Price</span>
                  <span className="text-blue-600 font-medium">$99.99</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Inventory Level</span>
                  <span className="text-yellow-600 font-medium">Medium (45%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Seasonal Factor</span>
                  <span className="text-purple-600 font-medium">Peak Season</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Dynamic pricing effectiveness metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Revenue Optimization</span>
                  <span className="text-sm text-green-600">+12.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Profit Margin Improvement</span>
                  <span className="text-sm text-blue-600">+8.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '83%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Market Competitiveness</span>
                  <span className="text-sm text-purple-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricing;
