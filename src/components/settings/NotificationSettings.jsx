import React, { useState } from 'react';

const Toggle = ({ label, description, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="font-medium text-slate-900">{label}</p>
        {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
      </div>
      <button 
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${checked ? 'bg-indigo-600' : 'bg-slate-200'}`}
      >
        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );
};

export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Notification Preferences</h2>
        <p className="text-sm text-slate-500 mt-1">Choose how and when you'd like to be notified.</p>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Email Notifications</h3>
        <div className="divide-y divide-slate-100">
          <Toggle label="Task assigned to me" defaultChecked={true} />
          <Toggle label="Task due date approaching (24h before)" defaultChecked={true} />
          <Toggle label="Project status changed" defaultChecked={true} />
          <Toggle label="Invoice paid" defaultChecked={true} />
          <Toggle label="Invoice overdue" defaultChecked={true} />
          <Toggle label="Weekly summary digest" defaultChecked={false} />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">In-App Notifications</h3>
        <div className="divide-y divide-slate-100">
          <Toggle label="Task comments and mentions" defaultChecked={true} />
          <Toggle label="Project updates" defaultChecked={true} />
          <Toggle label="Client activity" defaultChecked={false} />
          <Toggle label="System announcements" defaultChecked={true} />
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
