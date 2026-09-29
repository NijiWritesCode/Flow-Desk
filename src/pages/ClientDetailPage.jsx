import React, { useState } from 'react';
import ClientOverview from '../components/clients/ClientDetail/ClientOverview';
import ClientNotes from '../components/clients/ClientDetail/ClientNotes';
import ClientInvoices from '../components/clients/ClientDetail/ClientInvoices';

export default function ClientDetailPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Projects', 'Invoices', 'Notes'];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="text-sm text-[var(--text-secondary)] mb-6">
        <a href="/clients" className="hover:text-[var(--accent-primary)] hover:underline">Clients</a> / Kora Interiors
      </div>

      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-medium">
            KI
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">Kora Interiors</h1>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">Active</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Emma Lawson — emma@korainteriors.com — +1 (555) 012-3456</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-4 py-2 rounded text-sm font-medium transition-colors">
            Edit Client
          </button>
          <button className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-2 py-2 rounded transition-colors">
            ...
          </button>
        </div>
      </div>

      <div className="border-b border-[var(--border-primary)] mb-6">
        <nav className="flex gap-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === tab ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-primary)] rounded-t-full"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'Overview' && <ClientOverview />}
        {activeTab === 'Notes' && <ClientNotes />}
        {activeTab === 'Invoices' && <ClientInvoices />}
        {activeTab === 'Projects' && (
          <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--bg-hover)] border-b border-[var(--border-primary)]">
                <tr>
                  <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Project</th>
                  <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Progress</th>
                  <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Deadline</th>
                  <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-primary)]">
                <tr className="hover:bg-[var(--bg-hover)] cursor-pointer">
                  <td className="px-6 py-4 font-medium text-[var(--text-primary)]">Website Redesign</td>
                  <td className="px-6 py-4">72%</td>
                  <td className="px-6 py-4">Oct 04, 2026</td>
                  <td className="px-6 py-4"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">In Progress</span></td>
                </tr>
                <tr className="hover:bg-[var(--bg-hover)] cursor-pointer">
                  <td className="px-6 py-4 font-medium text-[var(--text-primary)]">Brand Refresh</td>
                  <td className="px-6 py-4">35%</td>
                  <td className="px-6 py-4">Nov 15, 2026</td>
                  <td className="px-6 py-4"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
