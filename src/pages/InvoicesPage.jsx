import React, { useState } from 'react';
import InvoiceTable from '../components/invoices/InvoiceTable';
import InvoiceForm from '../components/invoices/InvoiceForm';
import { FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export default function InvoicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Invoices</h1>
          <p className="text-sm text-[var(--text-secondary)]">Track billing and payments in one place.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          + Create Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[var(--bg-hover)] rounded-md text-[var(--text-secondary)]">
              <FileText size={20} />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Total Invoiced</p>
          </div>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">$21,500</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 rounded-md text-green-600">
              <CheckCircle size={20} />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Paid</p>
          </div>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">$17,300</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-50 rounded-md text-amber-600">
              <Clock size={20} />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Pending</p>
          </div>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">$4,200</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 rounded-md text-green-600">
              <AlertTriangle size={20} />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Overdue</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-2xl font-semibold text-[var(--text-primary)]">$0</p>
            <span className="text-sm text-green-600 font-medium mb-1">All clear!</span>
          </div>
        </div>
      </div>

      <InvoiceTable />

      <InvoiceForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
