import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CreateTaskModal({ isOpen, onClose }) {
  const [taskName, setTaskName] = useState('');
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-[var(--bg-secondary)] rounded-lg shadow-xl w-full max-w-md p-6 flex flex-col gap-4 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">Create a New Task</h2>
            <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[var(--text-primary)]">Task Title</label>
            <input 
              type="text" 
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="e.g., Design hero section" 
              className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[var(--text-primary)]">Project</label>
            <select className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm bg-transparent">
              <option value="">Select a project</option>
              <option value="p1">Website Redesign</option>
              <option value="p2">Mobile App UI</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-primary)]">Priority</label>
              <select className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm bg-transparent">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-primary)]">Due Date</label>
              <input 
                type="date" 
                className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm text-[var(--text-primary)] bg-transparent"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded transition-colors"
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 text-sm font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded transition-colors disabled:opacity-50"
              disabled={!taskName.trim()}
            >
              Create Task
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
