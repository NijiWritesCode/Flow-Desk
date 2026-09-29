import React, { useState } from 'react';
import ClientList from '../components/clients/ClientList';
import AddClientModal from '../components/clients/AddClientModal';
import { Search } from 'lucide-react';

export default function ClientsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Clients</h1>
          <p className="text-sm text-[var(--text-secondary)]">Build stronger relationships and keep your client work organized.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          + Add Client
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search clients..." 
            className="pl-9 pr-4 py-2 text-sm border border-[var(--border-primary)] rounded w-64 focus:outline-none focus:border-[var(--border-focus)]"
          />
        </div>
        <select className="px-3 py-2 text-sm border border-[var(--border-primary)] rounded bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]">
          <option>Filter by Status</option>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="px-3 py-2 text-sm border border-[var(--border-primary)] rounded bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]">
          <option>Sort by</option>
          <option>Name</option>
          <option>Revenue</option>
          <option>Last Activity</option>
        </select>
      </div>

      <ClientList />

      {isModalOpen && <AddClientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
