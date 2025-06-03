
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useAuth } from '@/contexts/AuthContext';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SubscriptionPlans = () => {
  const { user } = useAuth();
  const { subscriptionPlans } = useData();
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleSubscribe = (planId: string) => {
    toast({
      title: "Subscription activated!",
      description: `You have successfully subscribed to the ${planId} plan.`,
    });
  };

  const getPlanIcon = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'basic': return <Zap className="h-6 w-6" />;
      case 'professional': return <Star className="h-6 w-6" />;
      case 'enterprise': return <Crown className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  const getPopularBadge = (planName: string) => {
    return planName.toLowerCase() === 'professional' ? (
      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        Most Popular
      </Badge>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Scale your business with the right subscription plan
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={billingCycle === 'monthly' ? 'font-semibold' : 'text-gray-600'}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={billingCycle === 'yearly' ? 'font-semibold' : 'text-gray-600'}>
              Yearly
              <Badge className="ml-2 bg-green-100 text-green-800">Save 20%</Badge>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan) => {
            const yearlyPrice = plan.price * 12 * 0.8; // 20% discount for yearly
            const displayPrice = billingCycle === 'yearly' ? yearlyPrice / 12 : plan.price;
            const isCurrentPlan = user?.role === 'seller'; // Mock current plan check
            
            return (
              <Card 
                key={plan.id} 
                className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                  plan.name === 'Professional' ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {getPopularBadge(plan.name) && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {getPopularBadge(plan.name)}
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    plan.name === 'Basic' ? 'bg-blue-100 text-blue-600' :
                    plan.name === 'Professional' ? 'bg-purple-100 text-purple-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {getPlanIcon(plan.name)}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${displayPrice.toFixed(0)}</span>
                    <span className="text-gray-600">/{billingCycle === 'yearly' ? 'month' : 'month'}</span>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-600 mt-1">
                        Billed yearly (${yearlyPrice.toFixed(0)} total)
                      </div>
                    )}
                  </div>
                  <CardDescription className="mt-2">
                    {plan.commissionRate}% commission rate
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t">
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex justify-between">
                        <span>Product Limit:</span>
                        <span className="font-medium">
                          {plan.productLimit === -1 ? 'Unlimited' : plan.productLimit}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span className="font-medium">
                          {plan.storageLimit === -1 ? 'Unlimited' : `${plan.storageLimit}MB`}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={isCurrentPlan && plan.name === 'Basic'}
                    className={`w-full ${
                      plan.name === 'Professional' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    {isCurrentPlan && plan.name === 'Basic' ? 'Current Plan' : 'Subscribe Now'}
                  </Button>
                  
                  {plan.name === 'Professional' && (
                    <div className="text-center">
                      <p className="text-sm text-purple-600 font-medium">
                        🔥 Most chosen by successful sellers
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Compare All Features
          </h2>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800">Features</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">Basic</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">Professional</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Products</td>
                    <td className="px-6 py-4 text-center">100</td>
                    <td className="px-6 py-4 text-center">500</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Commission Rate</td>
                    <td className="px-6 py-4 text-center">5%</td>
                    <td className="px-6 py-4 text-center">3%</td>
                    <td className="px-6 py-4 text-center">1%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Analytics</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center">Advanced</td>
                    <td className="px-6 py-4 text-center">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Support</td>
                    <td className="px-6 py-4 text-center">Email</td>
                    <td className="px-6 py-4 text-center">Priority</td>
                    <td className="px-6 py-4 text-center">24/7 Dedicated</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">API Access</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
