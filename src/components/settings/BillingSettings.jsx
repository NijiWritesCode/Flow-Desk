import React from 'react';
import { CreditCard } from 'lucide-react';

export default function BillingSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Billing & Subscription</h2>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-semibold text-slate-900">Pro Plan</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">Active</span>
            </div>
            <p className="text-sm text-slate-600">$12/month — Next billing date: October 28, 2026</p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col items-end gap-2">
            <button className="px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Manage Subscription
            </button>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View Billing History</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-900 mb-3">Payment Method</h3>
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-md text-indigo-600">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Visa ending in 4242</p>
                <p className="text-sm text-slate-500">Expires: 08/2028</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
