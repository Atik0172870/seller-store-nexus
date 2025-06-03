
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Clock, TrendingUp, Users } from 'lucide-react';

const Auctions = () => {
  const [auctions] = useState([
    { id: 'AUC001', productName: 'Vintage Watch Collection', startPrice: 100, currentBid: 450, highestBidder: 'John D.', bids: 12, endTime: '2024-06-05 18:00', status: 'active' },
    { id: 'AUC002', productName: 'Rare Art Piece', startPrice: 500, currentBid: 1250, highestBidder: 'Jane S.', bids: 8, endTime: '2024-06-04 15:30', status: 'ending_soon' },
    { id: 'AUC003', productName: 'Electronics Bundle', startPrice: 200, currentBid: 275, highestBidder: 'Mike J.', bids: 5, endTime: '2024-06-03 12:00', status: 'ended' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Auction System</h1>
            <p className="text-gray-600">Manage product auctions and bidding</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Gavel className="h-4 w-4 mr-2" />
            Create Auction
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gavel className="h-5 w-5 mr-2" />
                Active Auctions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{auctions.filter(a => a.status === 'active' || a.status === 'ending_soon').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Total Bids
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{auctions.reduce((sum, a) => sum + a.bids, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${auctions.reduce((sum, a) => sum + a.currentBid, 0).toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Ending Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{auctions.filter(a => a.status === 'ending_soon').length}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Live Auctions</CardTitle>
            <CardDescription>Monitor all auction activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Product</th>
                    <th className="text-left p-3">Start Price</th>
                    <th className="text-left p-3">Current Bid</th>
                    <th className="text-left p-3">Highest Bidder</th>
                    <th className="text-left p-3">Total Bids</th>
                    <th className="text-left p-3">End Time</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {auctions.map((auction) => (
                    <tr key={auction.id} className="border-b">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{auction.productName}</div>
                          <div className="text-sm text-gray-600">{auction.id}</div>
                        </div>
                      </td>
                      <td className="p-3">${auction.startPrice}</td>
                      <td className="p-3 font-bold text-green-600">${auction.currentBid}</td>
                      <td className="p-3">{auction.highestBidder}</td>
                      <td className="p-3">{auction.bids}</td>
                      <td className="p-3">{auction.endTime}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          auction.status === 'active' ? 'bg-green-100 text-green-800' :
                          auction.status === 'ending_soon' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {auction.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Bids</Button>
                          {auction.status === 'ended' && (
                            <Button variant="outline" size="sm" className="text-green-600">Finalize</Button>
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

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Auction Settings</CardTitle>
              <CardDescription>Configure auction parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded">
                  <h3 className="font-medium mb-2">Minimum Bid Increment</h3>
                  <p className="text-sm text-gray-600">$5.00</p>
                </div>
                <div className="p-3 border rounded">
                  <h3 className="font-medium mb-2">Auto-extend Time</h3>
                  <p className="text-sm text-gray-600">5 minutes when bid placed in last 5 minutes</p>
                </div>
                <div className="p-3 border rounded">
                  <h3 className="font-medium mb-2">Reserve Price Policy</h3>
                  <p className="text-sm text-gray-600">Optional reserve prices allowed</p>
                </div>
                <div className="p-3 border rounded">
                  <h3 className="font-medium mb-2">Bidder Verification</h3>
                  <p className="text-sm text-gray-600">Require verified payment method</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest auction events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <div>
                    <p className="font-medium">New bid placed</p>
                    <p className="text-sm text-gray-600">$475 on Vintage Watch Collection</p>
                  </div>
                  <span className="text-sm text-gray-500">2 min ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <div>
                    <p className="font-medium">Auction started</p>
                    <p className="text-sm text-gray-600">New Electronics Bundle auction</p>
                  </div>
                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <div>
                    <p className="font-medium">Auction ending soon</p>
                    <p className="text-sm text-gray-600">Rare Art Piece - 2 hours left</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">Auction completed</p>
                    <p className="text-sm text-gray-600">Electronics Bundle sold for $275</p>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
