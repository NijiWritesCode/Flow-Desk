import React from 'react';

export default function ClientOverview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <p className="text-sm text-[var(--text-secondary)] mb-1">Total Revenue</p>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">$8,500</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <p className="text-sm text-[var(--text-secondary)] mb-1">Active Projects</p>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">2</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5">
          <p className="text-sm text-[var(--text-secondary)] mb-1">Outstanding Balance</p>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">$2,500</p>
        </div>
      </div>

      <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-6">
        <h3 className="text-lg font-medium text-[var(--text-primary)] mb-4">Client Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
          <div>
            <p className="text-[var(--text-secondary)] mb-1">Company</p>
            <p className="font-medium text-[var(--text-primary)]">Kora Interiors</p>
          </div>
          <div>
            <p className="text-[var(--text-secondary)] mb-1">Industry</p>
            <p className="font-medium text-[var(--text-primary)]">Interior Design</p>
          </div>
          <div>
            <p className="text-[var(--text-secondary)] mb-1">Website</p>
            <a href="#" className="font-medium text-[var(--accent-primary)] hover:underline">www.korainteriors.com</a>
          </div>
          <div>
            <p className="text-[var(--text-secondary)] mb-1">Address</p>
            <p className="font-medium text-[var(--text-primary)]">1234 Design Ave, Suite 200</p>
          </div>
          <div>
            <p className="text-[var(--text-secondary)] mb-1">Relationship Since</p>
            <p className="font-medium text-[var(--text-primary)]">June 2026</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
          <p className="text-[var(--text-secondary)] text-sm mb-1">Notes</p>
          <p className="text-sm text-[var(--text-primary)]">Prefers communication via email. Very detail-oriented, appreciates mockups before development begins.</p>
        </div>
      </div>

      <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-6">
        <h3 className="text-lg font-medium text-[var(--text-primary)] mb-4">Recent Activity</h3>
        <div className="relative border-l-2 border-[var(--border-primary)] ml-3 space-y-6">
          <div className="relative pl-6">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--accent-light)] flex items-center justify-center border-2 border-[var(--bg-secondary)] text-[var(--accent-primary)]"></span>
            <p className="text-sm text-[var(--text-primary)]">Invoice <strong className="font-medium">#FD-1048</strong> sent for $2,500.</p>
            <span className="text-xs text-[var(--text-tertiary)]">Yesterday</span>
          </div>
          <div className="relative pl-6">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--status-success-bg)] flex items-center justify-center border-2 border-[var(--bg-secondary)] text-[var(--status-success)]"></span>
            <p className="text-sm text-[var(--text-primary)]"><strong className="font-medium">Alex Johnson</strong> completed <strong className="font-medium">Homepage responsive layout</strong> for Website Redesign.</p>
            <span className="text-xs text-[var(--text-tertiary)]">2 days ago</span>
          </div>
          <div className="relative pl-6">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--accent-light)] flex items-center justify-center border-2 border-[var(--bg-secondary)] text-[var(--accent-primary)]"></span>
            <p className="text-sm text-[var(--text-primary)]">New project <strong className="font-medium">Brand Refresh</strong> was created.</p>
            <span className="text-xs text-[var(--text-tertiary)]">1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
