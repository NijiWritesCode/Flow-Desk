import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function ClientInvoices() {
  const dummyInvoices = [
    { id: '#FD-1048', amount: 2500, issueDate: 'Sep 15, 2026', dueDate: 'Sep 30, 2026', status: 'Pending' },
    { id: '#FD-1035', amount: 3000, issueDate: 'Aug 10, 2026', dueDate: 'Aug 25, 2026', status: 'Paid' },
    { id: '#FD-1022', amount: 3000, issueDate: 'Jul 05, 2026', dueDate: 'Jul 20, 2026', status: 'Paid' },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] overflow-hidden">
      <div className="flex justify-between items-center p-5 border-b border-[var(--border-primary)]">
        <h3 className="text-lg font-medium text-[var(--text-primary)]">Invoices</h3>
        <button className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-3 py-1.5 rounded text-sm font-medium transition-colors">
          + Create Invoice
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-[var(--bg-hover)] border-b border-[var(--border-primary)]">
            <tr>
              <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Invoice #</th>
              <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Amount</th>
              <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Issue Date</th>
              <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Due Date</th>
              <th className="px-6 py-3 font-medium text-[var(--text-secondary)]">Status</th>
              <th className="px-6 py-3 font-medium text-[var(--text-secondary)] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-primary)]">
            {dummyInvoices.map((invoice, i) => (
              <tr key={i} className="hover:bg-[var(--bg-hover)]">
                <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{invoice.id}</td>
                <td className="px-6 py-4 font-medium">${invoice.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">{invoice.issueDate}</td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">{invoice.dueDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
