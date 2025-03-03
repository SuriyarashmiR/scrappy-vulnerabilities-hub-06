
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Home, Search, Wifi } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-full">
      {/* Logo and Theme Toggle */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">WEB SCRAPING TOOL</h1>
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          <Link 
            to="/login" 
            className="px-4 py-1 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-colors"
          >
            LOGIN
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-10">
        <div className="flex justify-around py-3">
          <Link to="/" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Home size={20} />
            <span className="text-xs mt-1">HOME</span>
          </Link>
          <Link to="/search" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Search size={20} />
            <span className="text-xs mt-1">SEARCH</span>
          </Link>
          <Link to="/connect" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Wifi size={20} />
            <span className="text-xs mt-1">CONNECT</span>
          </Link>
        </div>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col h-screen fixed left-0 top-0 bg-gray-100 dark:bg-gray-800 w-[180px] p-4">
        <h1 className="font-bold mb-8 text-lg">WEB SCRAPPING TOOL</h1>
        <div className="flex flex-col space-y-4">
          <Link to="/" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <Home size={20} />
            <span>HOME</span>
          </Link>
          <Link to="/search" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <Search size={20} />
            <span>SEARCH</span>
          </Link>
          <Link to="/connect" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <Wifi size={20} />
            <span>CONNECT</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
