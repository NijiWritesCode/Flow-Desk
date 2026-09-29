import React from 'react';

export default function InvoiceAgingTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Invoice Aging</h3>
      <div className="flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-sm font-medium text-slate-500">
              <th className="pb-3 pr-4">Age</th>
              <th className="pb-3 px-4 text-right">Amount</th>
              <th className="pb-3 pl-4 text-right">Count</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-3 pr-4 font-medium text-slate-900">Current (0–15 days)</td>
              <td className="py-3 px-4 text-right font-medium">$2,500</td>
              <td className="py-3 pl-4 text-right text-slate-600">1 invoice</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-slate-500">
              <td className="py-3 pr-4">16–30 days</td>
              <td className="py-3 px-4 text-right">$0</td>
              <td className="py-3 pl-4 text-right">0 invoices</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-slate-500">
              <td className="py-3 pr-4">31–60 days</td>
              <td className="py-3 px-4 text-right">$0</td>
              <td className="py-3 pl-4 text-right">0 invoices</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors text-slate-500">
              <td className="py-3 pr-4">60+ days</td>
              <td className="py-3 px-4 text-right">$0</td>
              <td className="py-3 pl-4 text-right">0 invoices</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-600">All invoices are within 15 days. Your collection performance is excellent.</p>
    </div>
  );
}
