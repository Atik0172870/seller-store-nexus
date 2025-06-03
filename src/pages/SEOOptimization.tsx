
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp, Eye, Target } from 'lucide-react';

const SEOOptimization = () => {
  const [seoData] = useState({
    totalPages: 45,
    optimizedPages: 32,
    avgPageScore: 78,
    organicTraffic: 12500
  });

  const [pages] = useState([
    { url: '/products/wireless-headphones', title: 'Wireless Headphones - Best Audio Quality', score: 85, issues: 2, traffic: 1250 },
    { url: '/category/electronics', title: 'Electronics - Latest Gadgets', score: 72, issues: 5, traffic: 890 },
    { url: '/about-us', title: 'About AmarProduct - Your Trusted Marketplace', score: 90, issues: 1, traffic: 450 },
    { url: '/products/smart-watch', title: 'Smart Watch Collection', score: 65, issues: 7, traffic: 720 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">SEO Optimization</h1>
            <p className="text-gray-600">Improve search engine visibility and rankings</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Search className="h-4 w-4 mr-2" />
            SEO Audit
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Total Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{seoData.totalPages}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Optimized Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{seoData.optimizedPages}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Avg SEO Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{seoData.avgPageScore}%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Organic Traffic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{seoData.organicTraffic.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Page SEO Analysis</CardTitle>
            <CardDescription>SEO performance of individual pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Page URL</th>
                    <th className="text-left p-3">Title</th>
                    <th className="text-left p-3">SEO Score</th>
                    <th className="text-left p-3">Issues</th>
                    <th className="text-left p-3">Organic Traffic</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3 font-mono text-sm">{page.url}</td>
                      <td className="p-3">{page.title}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-12 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                page.score >= 80 ? 'bg-green-600' :
                                page.score >= 60 ? 'bg-yellow-600' :
                                'bg-red-600'
                              }`}
                              style={{width: `${page.score}%`}}
                            ></div>
                          </div>
                          <span className="text-sm">{page.score}%</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          page.issues === 0 ? 'bg-green-100 text-green-800' :
                          page.issues <= 3 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {page.issues} issues
                        </span>
                      </td>
                      <td className="p-3">{page.traffic.toLocaleString()}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Analyze</Button>
                          <Button variant="outline" size="sm">Optimize</Button>
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
              <CardTitle>SEO Checklist</CardTitle>
              <CardDescription>Essential optimization tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Meta titles optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Meta descriptions added</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Header tags structured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Image alt texts added</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Schema markup implemented</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Sitemap generated</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Keyword Performance</CardTitle>
              <CardDescription>Top performing search terms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <span className="font-medium">wireless headphones</span>
                    <p className="text-sm text-gray-600">Position: 3</p>
                  </div>
                  <span className="text-sm text-green-600">+2 ↑</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <span className="font-medium">smart watch</span>
                    <p className="text-sm text-gray-600">Position: 7</p>
                  </div>
                  <span className="text-sm text-green-600">+3 ↑</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <span className="font-medium">electronics online</span>
                    <p className="text-sm text-gray-600">Position: 12</p>
                  </div>
                  <span className="text-sm text-red-600">-1 ↓</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <span className="font-medium">buy gadgets</span>
                    <p className="text-sm text-gray-600">Position: 18</p>
                  </div>
                  <span className="text-sm text-gray-600">→</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimization;
