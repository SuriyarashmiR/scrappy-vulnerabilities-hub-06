
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 animate-fade-in">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for a service..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-6 py-4 pr-12 text-lg rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-scraper-blue transition-all duration-300 shadow-sm"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 px-8 py-3 mr-1 text-white bg-scraper-blue rounded-full hover:bg-blue-500 transition-all duration-300 focus:outline-none"
        >
          <span className="flex items-center">
            <Search className="mr-2" size={18} /> Search
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
