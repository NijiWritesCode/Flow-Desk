import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function Header({ onMenuClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Simple title generator based on route for layout purposes
  const getPageTitle = (pathname) => {
    if (pathname === '/') return 'Overview';
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length > 0) {
      return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    }
    return 'Overview';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 w-full h-16 bg-[#F8FAFC]/80 backdrop-blur-md transition-shadow duration-200 flex items-center justify-between px-4 sm:px-8 border-b ${
        isScrolled ? 'shadow-sm border-[#E2E8F0]' : 'border-transparent'
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-md transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
          {getPageTitle(location.pathname)}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#64748B]" />
          </div>
          <input
            type="text"
            placeholder="Search projects, clients..."
            className="w-72 bg-white border border-[#E2E8F0] text-[#0F172A] text-sm rounded-md pl-10 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
            <span className="text-xs text-[#94A3B8] border border-[#E2E8F0] rounded px-1.5 py-0.5 font-medium">
              Ctrl K
            </span>
          </div>
        </div>

        {/* Mobile Search Button */}
        <button className="md:hidden p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#DC2626] rounded-full animate-pulse border-2 border-[#F8FAFC]"></span>
        </button>

        {/* Avatar */}
        <button className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium text-sm hover:ring-2 hover:ring-indigo-600 hover:ring-offset-2 hover:ring-offset-[#F8FAFC] transition-all">
          AJ
        </button>
      </div>
    </header>
  );
}
