import React from 'react';
import SettingsLayout from '../components/settings/SettingsLayout';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your account, preferences, and workspace configuration.</p>
      </div>
      <SettingsLayout />
    </div>
  );
}
