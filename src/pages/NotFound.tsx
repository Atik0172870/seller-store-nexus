
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center">
          <div className="text-6xl font-bold text-purple-600 mb-4">404</div>
          <CardTitle className="text-2xl text-gray-800">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Home className="h-4 w-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            
            <Link to="/search-filters" className="block">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search Products
              </Button>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            Need help? <Link to="/customer-support" className="text-purple-600 hover:text-purple-700">Contact Support</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
