
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import VulnerabilityList from '@/components/VulnerabilityList';
import { Shield } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading state for better UX
    const timer = setTimeout(() => {
      document.querySelector('.hero-section')?.classList.add('opacity-100');
      document.querySelector('.hero-section')?.classList.remove('opacity-0');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen w-full pb-12">
      {/* Hero Section with Logo and Search */}
      <div className="hero-section opacity-0 transition-opacity duration-700 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <Shield className="text-scraper-blue animate-pulse-soft" size={36} />
            <h1 className="text-4xl font-bold ml-2 text-scraper-darkGray tracking-tight">
              SCRAPER
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate platform to detect and analyze security vulnerabilities across companies
          </p>

          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 lg:px-8 pt-4">
        {/* First Vulnerability List */}
        <div className="mb-12">
          <VulnerabilityList title="Latest Vulnerabilities" />
        </div>

        {/* Dropdown Section */}
        <div className="w-full max-w-6xl mx-auto mb-12 bg-white rounded-xl p-6 shadow-sm">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center">
                <Shield className="mr-2 text-scraper-red" size={20} />
                <span className="text-xl font-semibold">Historical Vulnerabilities</span>
              </div>
              <span className="transition group-open:rotate-180">
                <ChevronDown className="text-gray-500" size={24} />
              </span>
            </summary>
            <div className="mt-6 text-gray-600 group-open:animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-scraper-lightBlue rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-800">Windows</h3>
                  <p>Previous security incidents include unauthorized data access and system breaches affecting millions of users.</p>
                </div>
                <div className="p-4 bg-scraper-amber rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-800">NVIDIA</h3>
                  <p>Previous vulnerabilities include GPU driver exploits and potential backdoor access through graphics processing.</p>
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Second Vulnerability List */}
        <div className="mb-12">
          <VulnerabilityList title="Additional Vulnerabilities" />
        </div>
      </div>
    </div>
  );
};

// Import at the end to avoid circular dependencies
import { ChevronDown } from 'lucide-react';

export default Index;
