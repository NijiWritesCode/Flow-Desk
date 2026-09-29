import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function InvoiceTable() {
  const dummyInvoices = [
    { id: '#FD-1048', client: 'Kora Interiors', amount: 2500, issueDate: 'Sep 15, 2026', dueDate: 'Sep 30, 2026', status: 'Pending' },
    { id: '#FD-1047', client: 'Nova Health', amount: 4800, issueDate: 'Sep 12, 2026', dueDate: 'Sep 27, 2026', status: 'Paid' },
    { id: '#FD-1046', client: 'Maison Studio', amount: 6000, issueDate: 'Sep 01, 2026', dueDate: 'Sep 16, 2026', status: 'Paid' },
    { id: '#FD-1045', client: 'Zenith Corp', amount: 1700, issueDate: 'Aug 28, 2026', dueDate: 'Sep 12, 2026', status: 'Paid' },
    { id: '#FD-1044', client: 'Bright Foods', amount: 3200, issueDate: 'Aug 20, 2026', dueDate: 'Sep 04, 2026', status: 'Paid' },
    { id: '#FD-1043', client: 'Pulse Agency', amount: 1600, issueDate: 'Aug 15, 2026', dueDate: 'Aug 30, 2026', status: 'Paid' },
    { id: '#FD-1042', client: 'Kora Interiors', amount: 1700, issueDate: 'Aug 05, 2026', dueDate: 'Aug 20, 2026', status: 'Paid' },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-[var(--bg-hover)] border-b border-[var(--border-primary)]">
            <tr>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)]">Invoice #</th>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)]">Client</th>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)]">Amount</th>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)]">Issue Date</th>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)]">Due Date</th>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)]">Status</th>
              <th className="px-6 py-4 font-medium text-[var(--text-secondary)] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-primary)]">
            {dummyInvoices.map((invoice, i) => (
              <tr key={i} className="hover:bg-[var(--bg-hover)]">
                <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{invoice.id}</td>
                <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{invoice.client}</td>
                <td className="px-6 py-4 font-medium">${invoice.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">{invoice.issueDate}</td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">{invoice.dueDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1 rounded hover:bg-[var(--bg-hover)]">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-[var(--border-primary)] text-sm text-[var(--text-secondary)] flex justify-between items-center bg-[var(--bg-secondary)]">
        <span>Showing 1–7 of 7 invoices</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-[var(--border-primary)] rounded text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-50" disabled>Previous</button>
          <button className="px-3 py-1 border border-[var(--border-primary)] rounded text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-50" disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
