import React from 'react';

export default function IntegrationSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Integrations</h2>
      <p className="text-slate-600 mb-4">Connect FlowDesk with your favorite tools.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1,2,3,4].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-md"></div>
              <div>
                <p className="font-medium text-slate-900">App Name</p>
                <p className="text-sm text-slate-500">Description of integration</p>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
