
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Languages, Check, Edit } from 'lucide-react';

const MultiLanguage = () => {
  const [languages] = useState([
    { code: 'en', name: 'English', isDefault: true, progress: 100, status: 'active' },
    { code: 'bn', name: 'Bengali', isDefault: false, progress: 85, status: 'active' },
    { code: 'hi', name: 'Hindi', isDefault: false, progress: 60, status: 'in_progress' },
    { code: 'ar', name: 'Arabic', isDefault: false, progress: 30, status: 'in_progress' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Multi-Language Support</h1>
            <p className="text-gray-600">Manage translations and localization</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Languages className="h-4 w-4 mr-2" />
            Add Language
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Total Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{languages.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                Active Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{languages.filter(l => l.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Edit className="h-5 w-5 mr-2" />
                In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{languages.filter(l => l.status === 'in_progress').length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Languages className="h-5 w-5 mr-2" />
                Avg Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(languages.reduce((sum, l) => sum + l.progress, 0) / languages.length)}%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Language Management</CardTitle>
            <CardDescription>Configure supported languages and translation progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Language</th>
                    <th className="text-left p-3">Code</th>
                    <th className="text-left p-3">Default</th>
                    <th className="text-left p-3">Translation Progress</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((language) => (
                    <tr key={language.code} className="border-b">
                      <td className="p-3 font-medium">{language.name}</td>
                      <td className="p-3 font-mono uppercase">{language.code}</td>
                      <td className="p-3">
                        {language.isDefault && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Default</span>
                        )}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                language.progress === 100 ? 'bg-green-600' :
                                language.progress >= 70 ? 'bg-blue-600' :
                                'bg-yellow-600'
                              }`}
                              style={{width: `${language.progress}%`}}
                            ></div>
                          </div>
                          <span className="text-sm">{language.progress}%</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          language.status === 'active' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {language.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3 mr-1" />
                            Translate
                          </Button>
                          <Button variant="outline" size="sm">Settings</Button>
                          {language.status === 'active' && !language.isDefault && (
                            <Button variant="outline" size="sm" className="text-red-600">Disable</Button>
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
              <CardTitle>Translation Tools</CardTitle>
              <CardDescription>Available translation assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Auto Translation</h3>
                  <p className="text-sm text-gray-600">AI-powered initial translations</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Professional Translation</h3>
                  <p className="text-sm text-gray-600">Human translator services</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">Request Quote</Button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Community Translation</h3>
                  <p className="text-sm text-gray-600">Crowdsourced translations</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Localization Settings</CardTitle>
              <CardDescription>Regional preferences and formatting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Currency Display</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-sm">Auto-detect user currency</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-sm">Show price in multiple currencies</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Date & Time Format</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-sm">Use locale-specific formatting</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">24-hour time format</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Number Format</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-sm">Locale-specific number separators</span>
                    </label>
                  </div>
                </div>

                <Button className="w-full mt-4">Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MultiLanguage;
