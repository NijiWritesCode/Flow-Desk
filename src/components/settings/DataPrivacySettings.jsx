import React from 'react';

export default function DataPrivacySettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Data & Privacy</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-slate-900 mb-1">Export Data</h3>
          <p className="text-sm text-slate-600 mb-3">Download a copy of all your data stored in FlowDesk.</p>
          <button className="px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50">
            Request Data Export
          </button>
        </div>
        
        <div className="pt-6 border-t border-slate-200">
          <h3 className="font-medium text-red-600 mb-1">Delete Account</h3>
          <p className="text-sm text-slate-600 mb-3">Permanently delete your account and all associated data. This action cannot be undone.</p>
          <button className="px-4 py-2 bg-red-50 border border-red-200 rounded-md shadow-sm text-sm font-medium text-red-600 hover:bg-red-100">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
