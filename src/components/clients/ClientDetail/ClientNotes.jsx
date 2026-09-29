import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function ClientNotes() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-[var(--text-primary)]">Client Notes</h3>
        <button className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-3 py-1.5 rounded text-sm font-medium transition-colors">
          + Add Note
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5 relative group">
          <p className="text-sm text-[var(--text-primary)] mb-3">
            "Discussed Q4 priorities. They want to focus on the brand refresh and a holiday campaign landing page. Budget approved for both."
          </p>
          <div className="flex justify-between items-center text-xs text-[var(--text-tertiary)]">
            <span>Alex Johnson — Sep 25, 2026</span>
          </div>
          <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded transition-all">
            <MoreHorizontal size={16} />
          </button>
        </div>

        <div className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5 relative group">
          <p className="text-sm text-[var(--text-primary)] mb-3">
            "Kickoff call went well. Emma prefers Figma links over PDF exports. Set up shared workspace."
          </p>
          <div className="flex justify-between items-center text-xs text-[var(--text-tertiary)]">
            <span>Alex Johnson — Jun 12, 2026</span>
          </div>
          <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded transition-all">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
