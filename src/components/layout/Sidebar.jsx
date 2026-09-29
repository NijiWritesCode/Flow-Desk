import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  Users, 
  FileText, 
  BarChart3, 
  HelpCircle, 
  Settings,
  ChevronUp,
  User,
  Moon,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mainNav = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Projects', to: '/projects', icon: FolderKanban },
  { name: 'Tasks', to: '/tasks', icon: CheckSquare },
  { name: 'Clients', to: '/clients', icon: Users },
  { name: 'Invoices', to: '/invoices', icon: FileText },
  { name: 'Reports', to: '/reports', icon: BarChart3 },
];

const secondaryNav = [
  { name: 'Help & Support', to: '/help', icon: HelpCircle },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export function Sidebar({ className = '', onNavClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={`flex flex-col h-full bg-white text-slate-700 border-r border-slate-100 ${className}`}>
      {/* Logo */}
      <div className="p-8 pb-4">
        <Link to="/" className="flex items-center gap-2 text-slate-900 font-bold text-2xl tracking-tight" onClick={onNavClick}>
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-[#C6F953] font-black italic">/</span>
          </div>
          <span>FlowDesk</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 mt-6 space-y-1.5 overflow-y-auto">
        {mainNav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={onNavClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C6F953] text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Secondary Navigation */}
      <div className="px-4 py-4 space-y-1.5 border-t border-slate-100 mt-auto">
        {secondaryNav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={onNavClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C6F953] text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* User Profile Area */}
      <div className="relative p-4 border-t border-slate-100">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center w-full gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-slate-900 text-[#C6F953] flex items-center justify-center font-bold text-sm">
            AJ
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-bold text-slate-900">Alex Johnson</p>
            <p className="text-xs text-slate-500 truncate">alex@flowdesk.com</p>
          </div>
          <ChevronUp className={`w-4 h-4 text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-full left-4 right-4 mb-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50"
            >
              <div className="p-1.5">
                <Link
                  to="/settings/profile"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  My Account
                </Link>
                <button
                  className="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  <Moon className="w-4 h-4 text-slate-400" />
                  Dark Mode
                </button>
                <div className="h-px bg-slate-100 my-1.5" />
                <button
                  className="flex w-full items-center gap-2 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition-colors font-medium"
                >
                  <LogOut className="w-4 h-4 text-rose-400" />
                  Log Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
