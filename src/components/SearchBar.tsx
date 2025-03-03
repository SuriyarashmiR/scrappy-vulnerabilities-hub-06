
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
    <div className="w-full flex items-center justify-center space-x-2 max-w-xl mx-auto mb-5">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for a service..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scraper-blue dark:bg-gray-800 dark:text-white transition-all duration-300 font-sans shadow-sm"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="px-5 py-2.5 bg-scraper-blue text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-sm font-medium"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
