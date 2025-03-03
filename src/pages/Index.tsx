
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import VulnerabilityList from '@/components/VulnerabilityList';
import Navbar from '@/components/Navbar';
import { Shield } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    
    // Simulate search loading
    setTimeout(() => {
      setLoading(false);
      if (query.trim()) {
        toast({
          title: "Search Results",
          description: `Found vulnerabilities for "${query}"`,
          duration: 3000,
        });
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block w-[180px] flex-shrink-0">
        {/* This space is for the sidebar rendered by the Navbar component */}
      </div>
      
      <div className="flex-1 flex flex-col min-h-screen md:ml-[180px]">
        {/* Desktop nav bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Navbar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">WEB SCRAPING TOOL</h1>
              <p className="text-gray-600 dark:text-gray-400">REAL-TIME INFO</p>
            </div>
            
            <SearchBar onSearch={handleSearch} />
            
            {/* Vulnerability Sections - Layout like the reference image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Section 7</h3>
                <div className="flex items-center mb-2">
                  <div className="text-sm font-semibold mr-2">Section 8</div>
                  <div className="bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded text-xs">9.1</div>
                </div>
                <div className="h-32 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700"></div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Section 1</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                         alt="Amazon" className="h-5 mr-2" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 w-20 h-4 rounded"></div>
                </div>
                <div className="h-32 border border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700"></div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Section 2</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold">Section 10</div>
                  <div className="bg-gray-100 dark:bg-gray-700 w-20 h-4 rounded"></div>
                </div>
                <div className="h-32 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Section 4</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold">Section 11</div>
                  <div className="bg-gray-100 dark:bg-gray-700 w-20 h-4 rounded"></div>
                </div>
                <div className="h-32 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700"></div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Section 5</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold">Section 12</div>
                  <div className="bg-gray-100 dark:bg-gray-700 w-20 h-4 rounded"></div>
                </div>
                <div className="h-32 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700"></div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Section 6</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold">Section 13</div>
                  <div className="bg-gray-100 dark:bg-gray-700 w-20 h-4 rounded"></div>
                </div>
                <div className="h-32 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700"></div>
              </div>
            </div>
            
            {/* Original Vulnerability Lists */}
            <div className="my-10">
              <h2 className="text-xl font-semibold mb-4">Latest Vulnerabilities</h2>
              <VulnerabilityList title="" />
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Additional Vulnerabilities</h2>
              <VulnerabilityList title="" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile bottom nav (visible only on mobile) */}
      <div className="block md:hidden h-16">
        {/* Space for the mobile navbar */}
      </div>
    </div>
  );
};

export default Index;
