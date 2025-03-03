
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
            
            {/* 6 Identical Vulnerability Sections */}
            <div className="space-y-8 mt-8">
              <VulnerabilityList title="Company Security Assessment" />
              <VulnerabilityList title="Privacy Analysis" />
              <VulnerabilityList title="Data Management Practices" />
              <VulnerabilityList title="User Information Handling" />
              <VulnerabilityList title="Terms of Service Review" />
              <VulnerabilityList title="Security Vulnerabilities" />
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
