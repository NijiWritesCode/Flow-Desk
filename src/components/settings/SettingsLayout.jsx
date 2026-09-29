import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { User, Bell, Palette, Users, CreditCard, Link as LinkIcon, Shield } from 'lucide-react';

const tabs = [
  { id: 'profile', name: 'Profile', icon: User, path: '/settings/profile' },
  { id: 'notifications', name: 'Notifications', icon: Bell, path: '/settings/notifications' },
  { id: 'appearance', name: 'Appearance', icon: Palette, path: '/settings/appearance' },
  { id: 'team', name: 'Team', icon: Users, path: '/settings/team' },
  { id: 'billing', name: 'Billing', icon: CreditCard, path: '/settings/billing' },
  { id: 'integrations', name: 'Integrations', icon: LinkIcon, path: '/settings/integrations' },
  { id: 'privacy', name: 'Data & Privacy', icon: Shield, path: '/settings/privacy' },
];

export default function SettingsLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start w-full">
      <div className="w-full md:w-64 flex-shrink-0 bg-white md:bg-transparent rounded-lg border border-slate-200 md:border-0 md:rounded-none overflow-hidden">
        <nav className="flex flex-col">
          {tabs.map((tab) => {
            const isActive = location.pathname.includes(tab.path) || (location.pathname === '/settings' && tab.id === 'profile');
            return (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 md:rounded-md' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 md:rounded-md'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                {tab.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="flex-1 w-full max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
}
