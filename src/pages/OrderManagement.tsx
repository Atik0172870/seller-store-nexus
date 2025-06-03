
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Eye, Edit, Truck, X, Check, RefreshCw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { updateOrderStatus, cancelOrder, refundOrder } from '@/utils/orderUtils';

interface Order {
  id: string;
  customer: string;
  items: string;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  email: string;
  address: string;
  trackingNumber?: string;
}

const OrderManagement = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-001',
      customer: 'John Doe',
      items: 'Wireless Headphones, Phone Case',
      total: 129.98,
      status: 'pending',
      date: '2024-06-03',
      email: 'john@example.com',
      address: '123 Main St, City, State 12345'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      items: 'Smart Watch, Charging Cable',
      total: 249.99,
      status: 'confirmed',
      date: '2024-06-02',
      email: 'jane@example.com',
      address: '456 Oak Ave, City, State 67890',
      trackingNumber: 'TRK123456'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      items: 'Coffee Maker',
      total: 149.99,
      status: 'shipped',
      date: '2024-06-01',
      email: 'mike@example.com',
      address: '789 Pine Rd, City, State 11111',
      trackingNumber: 'TRK789012'
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');

  // View order details
  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowViewDialog(true);
  };

  // Edit order
  const handleEditOrder = (order: Order) => {
    setEditingOrder({ ...order });
    setTrackingNumber(order.trackingNumber || '');
    setShowEditDialog(true);
  };

  // Save order changes
  const handleSaveOrder = async () => {
    if (!editingOrder) return;

    try {
      setOrders(orders.map(order => 
        order.id === editingOrder.id 
          ? { ...editingOrder, trackingNumber }
          : order
      ));

      setShowEditDialog(false);
      setEditingOrder(null);
      setTrackingNumber('');

      toast({
        title: "Order updated",
        description: "Order details have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update order.",
        variant: "destructive",
      });
    }
  };

  // Confirm order
  const handleConfirmOrder = async (orderId: string) => {
    try {
      await updateOrderStatus(orderId, 'confirmed');
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'confirmed' as const }
          : order
      ));

      toast({
        title: "Order confirmed",
        description: "Order has been confirmed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to confirm order.",
        variant: "destructive",
      });
    }
  };

  // Ship order
  const handleShipOrder = async (orderId: string) => {
    try {
      const generatedTracking = `TRK${Date.now().toString().slice(-6)}`;
      await updateOrderStatus(orderId, 'shipped');
      
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'shipped' as const, trackingNumber: generatedTracking }
          : order
      ));

      toast({
        title: "Order shipped",
        description: `Order has been shipped with tracking number: ${generatedTracking}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to ship order.",
        variant: "destructive",
      });
    }
  };

  // Mark as delivered
  const handleMarkDelivered = async (orderId: string) => {
    try {
      await updateOrderStatus(orderId, 'delivered');
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'delivered' as const }
          : order
      ));

      toast({
        title: "Order delivered",
        description: "Order has been marked as delivered.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to mark order as delivered.",
        variant: "destructive",
      });
    }
  };

  // Cancel order
  const handleCancelOrder = async () => {
    if (!selectedOrder) return;

    try {
      await cancelOrder(selectedOrder.id, cancelReason);
      setOrders(orders.map(order => 
        order.id === selectedOrder.id 
          ? { ...order, status: 'cancelled' as const }
          : order
      ));

      setShowCancelDialog(false);
      setCancelReason('');
      setSelectedOrder(null);

      toast({
        title: "Order cancelled",
        description: "Order has been cancelled successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel order.",
        variant: "destructive",
      });
    }
  };

  // Process refund
  const handleRefund = async (order: Order) => {
    try {
      await refundOrder(order.id, order.total);
      toast({
        title: "Refund processed",
        description: `Refund of $${order.total} has been processed.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process refund.",
        variant: "destructive",
      });
    }
  };

  // Export orders
  const handleExportOrders = () => {
    const csvData = [
      ['Order ID', 'Customer', 'Items', 'Total', 'Status', 'Date'],
      ...orders.map(order => [
        order.id,
        order.customer,
        order.items,
        order.total.toString(),
        order.status,
        order.date
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders_export.csv';
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export completed",
      description: "Orders have been exported successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Order Management</h1>
            <p className="text-gray-600">Manage customer orders and fulfillment</p>
          </div>
          <Button 
            onClick={handleExportOrders}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Orders
          </Button>
        </div>

        {/* Order Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Total Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {orders.filter(o => o.status === 'pending').length}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Shipped</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {orders.filter(o => o.status === 'shipped').length}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Delivered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {orders.filter(o => o.status === 'delivered').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Manage all customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Order ID</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Items</th>
                    <th className="text-left p-3">Total</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="p-3 font-medium">{order.id}</td>
                      <td className="p-3">{order.customer}</td>
                      <td className="p-3">{order.items}</td>
                      <td className="p-3">${order.total}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'confirmed' ? 'bg-purple-100 text-purple-800' :
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-3">{order.date}</td>
                      <td className="p-3">
                        <div className="flex space-x-1 flex-wrap">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewOrder(order)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditOrder(order)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          {order.status === 'pending' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleConfirmOrder(order.id)}
                              className="text-green-600"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          {order.status === 'confirmed' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleShipOrder(order.id)}
                              className="text-blue-600"
                            >
                              <Truck className="h-4 w-4" />
                            </Button>
                          )}
                          {order.status === 'shipped' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleMarkDelivered(order.id)}
                              className="text-green-600"
                            >
                              Deliver
                            </Button>
                          )}
                          {order.status !== 'cancelled' && order.status !== 'delivered' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setSelectedOrder(order);
                                setShowCancelDialog(true);
                              }}
                              className="text-red-600"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                          {order.status === 'delivered' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleRefund(order)}
                              className="text-orange-600"
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
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

        {/* View Order Dialog */}
        <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
              <DialogDescription>Complete order information</DialogDescription>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Order ID</Label>
                    <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <Label>Customer</Label>
                    <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.customer}</p>
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.email}</p>
                </div>
                <div>
                  <Label>Shipping Address</Label>
                  <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.address}</p>
                </div>
                <div>
                  <Label>Items</Label>
                  <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.items}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Total</Label>
                    <p className="text-sm bg-gray-50 p-2 rounded">${selectedOrder.total}</p>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <p className="text-sm bg-gray-50 p-2 rounded capitalize">{selectedOrder.status}</p>
                  </div>
                  <div>
                    <Label>Date</Label>
                    <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.date}</p>
                  </div>
                </div>
                {selectedOrder.trackingNumber && (
                  <div>
                    <Label>Tracking Number</Label>
                    <p className="text-sm bg-gray-50 p-2 rounded">{selectedOrder.trackingNumber}</p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Edit Order Dialog */}
        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Order</DialogTitle>
              <DialogDescription>Update order information</DialogDescription>
            </DialogHeader>
            {editingOrder && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-customer">Customer</Label>
                    <Input
                      id="edit-customer"
                      value={editingOrder.customer}
                      onChange={(e) => setEditingOrder({ ...editingOrder, customer: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-email">Email</Label>
                    <Input
                      id="edit-email"
                      value={editingOrder.email}
                      onChange={(e) => setEditingOrder({ ...editingOrder, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="edit-address">Shipping Address</Label>
                  <Textarea
                    id="edit-address"
                    value={editingOrder.address}
                    onChange={(e) => setEditingOrder({ ...editingOrder, address: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-tracking">Tracking Number</Label>
                  <Input
                    id="edit-tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button onClick={handleSaveOrder}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setShowEditDialog(false)}>Cancel</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Cancel Order Dialog */}
        <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cancel Order</DialogTitle>
              <DialogDescription>Please provide a reason for cancellation</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cancel-reason">Cancellation Reason</Label>
                <Textarea
                  id="cancel-reason"
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="Enter reason for cancellation"
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleCancelOrder} variant="destructive">Cancel Order</Button>
                <Button variant="outline" onClick={() => setShowCancelDialog(false)}>Keep Order</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default OrderManagement;
