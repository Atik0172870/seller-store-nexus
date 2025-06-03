
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface AffiliateFormProps {
  affiliate?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const AffiliateForm: React.FC<AffiliateFormProps> = ({ affiliate, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: affiliate?.name || '',
    email: affiliate?.email || '',
    phone: affiliate?.phone || '',
    commissionRate: affiliate?.commissionRate || 10,
    code: affiliate?.code || `${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'commissionRate' ? Number(value) : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{affiliate ? 'Edit Affiliate' : 'Add New Affiliate'}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="code">Affiliate Code</Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="commissionRate">Commission Rate (%)</Label>
              <Input
                id="commissionRate"
                name="commissionRate"
                type="number"
                min="1"
                max="50"
                value={formData.commissionRate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-1">
                {affiliate ? 'Update' : 'Add'} Affiliate
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AffiliateForm;
