import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Share, TrendingUp, Eye, Edit, Ban } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AffiliateForm from '@/components/AffiliateForm';
import { addAffiliate, editAffiliate, payAffiliate, suspendAffiliate, generateSubdomain } from '@/utils/affiliateUtils';

const AffiliateProgram = () => {
  const [affiliates, setAffiliates] = useState([
    { id: 'A001', name: 'John Doe', email: 'john@example.com', code: 'JOHN123', commissionRate: 10, totalEarnings: 1250.50, totalReferrals: 45, status: 'active' },
    { id: 'A002', name: 'Jane Smith', email: 'jane@example.com', code: 'JANE456', commissionRate: 8, totalEarnings: 890.25, totalReferrals: 32, status: 'active' },
    { id: 'A003', name: 'Mike Johnson', email: 'mike@example.com', code: 'MIKE789', commissionRate: 12, totalEarnings: 2100.75, totalReferrals: 78, status: 'inactive' }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [editingAffiliate, setEditingAffiliate] = useState(null);
  const [viewingAffiliate, setViewingAffiliate] = useState(null);
  const { toast } = useToast();

  const handleAddAffiliate = () => {
    setEditingAffiliate(null);
    setShowForm(true);
  };

  const handleEditAffiliate = (affiliate: any) => {
    setEditingAffiliate(affiliate);
    setShowForm(true);
  };

  const handleViewAffiliate = (affiliate: any) => {
    setViewingAffiliate(affiliate);
    
    // Generate subdomain for company
    const subdomain = generateSubdomain(affiliate.name);
    
    toast({
      title: "Affiliate Details",
      description: `Name: ${affiliate.name}\nCode: ${affiliate.code}\nEarnings: $${affiliate.totalEarnings}\nSubdomain: ${subdomain}`,
    });
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      if (editingAffiliate) {
        await editAffiliate(editingAffiliate.id, formData);
        setAffiliates(prev => prev.map(a => 
          a.id === editingAffiliate.id ? { ...a, ...formData } : a
        ));
        toast({
          title: "Success",
          description: "Affiliate updated successfully",
        });
      } else {
        const newAffiliate = await addAffiliate({
          ...formData,
          totalEarnings: 0,
          totalReferrals: 0,
          status: 'active'
        });
        setAffiliates(prev => [...prev, newAffiliate]);
        toast({
          title: "Success",
          description: "New affiliate added successfully",
        });
      }
      setShowForm(false);
      setEditingAffiliate(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save affiliate",
        variant: "destructive",
      });
    }
  };

  const handlePayAffiliate = async (affiliate: any) => {
    try {
      await payAffiliate(affiliate.id, affiliate.totalEarnings);
      setAffiliates(prev => prev.map(a => 
        a.id === affiliate.id ? { ...a, totalEarnings: 0 } : a
      ));
      toast({
        title: "Payment Processed",
        description: `$${affiliate.totalEarnings} paid to ${affiliate.name}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment",
        variant: "destructive",
      });
    }
  };

  const handleSuspendAffiliate = async (affiliate: any) => {
    try {
      await suspendAffiliate(affiliate.id, "Administrative action");
      setAffiliates(prev => prev.map(a => 
        a.id === affiliate.id ? { ...a, status: 'inactive' } : a
      ));
      toast({
        title: "Affiliate Suspended",
        description: `${affiliate.name} has been suspended`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to suspend affiliate",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Affiliate Program</h1>
            <p className="text-gray-600">Manage affiliate partners and commissions</p>
          </div>
          <Button 
            onClick={handleAddAffiliate}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Add Affiliate
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Active Affiliates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{affiliates.filter(a => a.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${affiliates.reduce((sum, a) => sum + a.totalEarnings, 0).toFixed(2)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share className="h-5 w-5 mr-2" />
                Total Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{affiliates.reduce((sum, a) => sum + a.totalReferrals, 0)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Avg Commission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Affiliate Partners</CardTitle>
            <CardDescription>Manage your affiliate network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Affiliate Name</th>
                    <th className="text-left p-3">Code</th>
                    <th className="text-left p-3">Commission Rate</th>
                    <th className="text-left p-3">Total Earnings</th>
                    <th className="text-left p-3">Referrals</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {affiliates.map((affiliate) => (
                    <tr key={affiliate.id} className="border-b">
                      <td className="p-3 font-medium">{affiliate.name}</td>
                      <td className="p-3 font-mono">{affiliate.code}</td>
                      <td className="p-3">{affiliate.commissionRate}%</td>
                      <td className="p-3">${affiliate.totalEarnings.toFixed(2)}</td>
                      <td className="p-3">{affiliate.totalReferrals}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          affiliate.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {affiliate.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewAffiliate(affiliate)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditAffiliate(affiliate)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePayAffiliate(affiliate)}
                            disabled={affiliate.totalEarnings === 0}
                          >
                            <DollarSign className="h-4 w-4 mr-1" />
                            Pay
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600"
                            onClick={() => handleSuspendAffiliate(affiliate)}
                            disabled={affiliate.status === 'inactive'}
                          >
                            <Ban className="h-4 w-4 mr-1" />
                            Suspend
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
      </div>

      {showForm && (
        <AffiliateForm
          affiliate={editingAffiliate}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingAffiliate(null);
          }}
        />
      )}
    </div>
  );
};

export default AffiliateProgram;
