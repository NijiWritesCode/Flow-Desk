import React from 'react';
import { Mail, Phone, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClientCard({ client }) {
  return (
    <motion.div 
      whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
      className="bg-[var(--bg-secondary)] rounded-md shadow-sm border border-[var(--border-primary)] p-5 cursor-pointer transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm"
            style={{ backgroundColor: client.color || 'var(--accent-primary)' }}
          >
            {client.initials}
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">{client.name}</h3>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${client.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
              {client.status}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-sm">
        <p className="text-[var(--text-secondary)]"><span className="font-medium text-[var(--text-primary)]">Contact:</span> {client.contact}</p>
        <p className="text-[var(--text-secondary)]"><span className="font-medium text-[var(--text-primary)]">Email:</span> {client.email}</p>
      </div>

      <div className="flex gap-4 text-sm border-t border-[var(--border-primary)] pt-4 mb-4">
        <div className="flex-1">
          <p className="text-[var(--text-secondary)] text-xs mb-1">Projects</p>
          <p className="font-medium text-[var(--text-primary)]">{client.activeProjects} active</p>
        </div>
        <div className="flex-1 border-l border-[var(--border-primary)] pl-4">
          <p className="text-[var(--text-secondary)] text-xs mb-1">Revenue</p>
          <p className="font-medium text-[var(--text-primary)]">${client.revenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <p className="text-xs text-[var(--text-tertiary)]">Activity: {client.lastActivity}</p>
        <div className="flex items-center gap-1">
          <button className="p-1.5 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent-primary)] rounded transition-colors" aria-label="Email">
            <Mail size={16} />
          </button>
          <button className="p-1.5 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent-primary)] rounded transition-colors" aria-label="Phone">
            <Phone size={16} />
          </button>
          <button className="p-1.5 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent-primary)] rounded transition-colors" aria-label="More options">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
