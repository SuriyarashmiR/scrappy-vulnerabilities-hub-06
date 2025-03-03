
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
    <div className="w-full flex items-center justify-center space-x-2 max-w-xl mx-auto mb-6">
      <input
        type="text"
        placeholder="Search for a service..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scraper-blue dark:bg-gray-800 dark:text-white transition-all duration-300"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-scraper-blue text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
