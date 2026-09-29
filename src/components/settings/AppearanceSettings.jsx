import React, { useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function AppearanceSettings() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Appearance</h2>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-900 mb-4">Theme Selection</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setTheme('light')}
            className={`flex flex-col items-start p-4 border rounded-lg transition-all ${theme === 'light' ? 'border-indigo-600 bg-indigo-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
          >
            <Sun className={`w-5 h-5 mb-3 ${theme === 'light' ? 'text-indigo-600' : 'text-slate-500'}`} />
            <span className={`font-medium mb-1 ${theme === 'light' ? 'text-indigo-900' : 'text-slate-900'}`}>Light</span>
            <span className="text-xs text-slate-500 text-left">A clean, bright interface.</span>
          </button>
          
          <button 
            onClick={() => setTheme('dark')}
            className={`flex flex-col items-start p-4 border rounded-lg transition-all ${theme === 'dark' ? 'border-indigo-600 bg-indigo-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
          >
            <Moon className={`w-5 h-5 mb-3 ${theme === 'dark' ? 'text-indigo-600' : 'text-slate-500'}`} />
            <span className={`font-medium mb-1 ${theme === 'dark' ? 'text-indigo-900' : 'text-slate-900'}`}>Dark</span>
            <span className="text-xs text-slate-500 text-left">Easy on the eyes in low-light environments.</span>
          </button>
          
          <button 
            onClick={() => setTheme('system')}
            className={`flex flex-col items-start p-4 border rounded-lg transition-all ${theme === 'system' ? 'border-indigo-600 bg-indigo-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
          >
            <Monitor className={`w-5 h-5 mb-3 ${theme === 'system' ? 'text-indigo-600' : 'text-slate-500'}`} />
            <span className={`font-medium mb-1 ${theme === 'system' ? 'text-indigo-900' : 'text-slate-900'}`}>System</span>
            <span className="text-xs text-slate-500 text-left">Automatically match your device settings.</span>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-900 mb-3">Sidebar Density</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="density" defaultChecked className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
            <span className="text-sm text-slate-700">Comfortable</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="density" className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
            <span className="text-sm text-slate-700">Compact</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Date Format</label>
          <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option>MMM DD, YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Currency Display</label>
          <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option>USD ($)</option>
            <option>EUR (€)</option>
            <option>GBP (£)</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">This only affects display formatting.</p>
        </div>
      </div>
    </div>
  );
}
