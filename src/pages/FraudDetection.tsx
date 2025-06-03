
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Eye } from 'lucide-react';

const FraudDetection = () => {
  const [alerts] = useState([
    { id: 'F001', type: 'suspicious_order', orderId: 'ORD-001', riskScore: 85, reason: 'Multiple orders from same IP', status: 'pending', date: '2024-06-03' },
    { id: 'F002', type: 'payment_fraud', orderId: 'ORD-002', riskScore: 92, reason: 'Stolen credit card detected', status: 'blocked', date: '2024-06-03' },
    { id: 'F003', type: 'account_takeover', userId: 'U123', riskScore: 78, reason: 'Login from unusual location', status: 'reviewed', date: '2024-06-02' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Fraud Detection System</h1>
          <p className="text-gray-600">Monitor and prevent fraudulent activities</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                High Risk Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{alerts.filter(a => a.riskScore >= 80).length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-500" />
                Total Blocked
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{alerts.filter(a => a.status === 'blocked').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-yellow-500" />
                Under Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{alerts.filter(a => a.status === 'pending').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                False Positives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Fraud Alerts</CardTitle>
            <CardDescription>Recent suspicious activities detected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Alert ID</th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">Reference</th>
                    <th className="text-left p-3">Risk Score</th>
                    <th className="text-left p-3">Reason</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((alert) => (
                    <tr key={alert.id} className="border-b">
                      <td className="p-3">{alert.id}</td>
                      <td className="p-3 capitalize">{alert.type.replace('_', ' ')}</td>
                      <td className="p-3">{alert.orderId || alert.userId}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          alert.riskScore >= 80 ? 'bg-red-100 text-red-800' :
                          alert.riskScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {alert.riskScore}%
                        </span>
                      </td>
                      <td className="p-3">{alert.reason}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          alert.status === 'blocked' ? 'bg-red-100 text-red-800' :
                          alert.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {alert.status}
                        </span>
                      </td>
                      <td className="p-3">{alert.date}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Investigate</Button>
                          <Button variant="outline" size="sm" className="text-green-600">Approve</Button>
                          <Button variant="outline" size="sm" className="text-red-600">Block</Button>
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
              <CardTitle>Detection Rules</CardTitle>
              <CardDescription>Configure fraud detection parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded">
                  <h3 className="font-medium">Velocity Rules</h3>
                  <p className="text-sm text-gray-600">Multiple orders within short timeframe</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm">Status: Active</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <h3 className="font-medium">Geolocation Rules</h3>
                  <p className="text-sm text-gray-600">Orders from high-risk countries</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm">Status: Active</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <h3 className="font-medium">Payment Rules</h3>
                  <p className="text-sm text-gray-600">Suspicious payment patterns</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm">Status: Active</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Fraud detection system metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Detection Accuracy</span>
                  <span className="text-sm text-green-600">97.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '97.7%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Response Time</span>
                  <span className="text-sm text-blue-600">< 100ms</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">False Positive Rate</span>
                  <span className="text-sm text-yellow-600">2.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '23%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FraudDetection;
