
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import VulnerabilityList from '@/components/VulnerabilityList';
import Navbar from '@/components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [globalExpanded, setGlobalExpanded] = useState(false);

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

  const handleGlobalExpandToggle = () => {
    setGlobalExpanded(!globalExpanded);
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
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">WEB SCRAPING TOOL</h1>
              <p className="text-gray-600 dark:text-gray-400">REAL-TIME INFO</p>
            </div>
            
            <SearchBar onSearch={handleSearch} />
            
            {/* Global Expand/Collapse Control */}
            <div className="flex justify-end mb-4 mt-6">
              <button
                onClick={handleGlobalExpandToggle}
                className="flex items-center px-4 py-2 rounded-lg bg-scraper-blue text-white hover:bg-blue-600 transition-all duration-200"
              >
                {globalExpanded ? 'Collapse' : 'Expand'} All
                {globalExpanded ? (
                  <ChevronUp className="ml-2" size={18} />
                ) : (
                  <ChevronDown className="ml-2" size={18} />
                )}
              </button>
            </div>
            
            {/* 3 Vulnerability Sections (reduced from 6) */}
            <div className="space-y-6 mt-2">
              <VulnerabilityList globalExpanded={globalExpanded} />
              <VulnerabilityList globalExpanded={globalExpanded} />
              <VulnerabilityList globalExpanded={globalExpanded} />
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
