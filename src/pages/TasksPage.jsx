import React, { useState } from 'react';
import KanbanBoard from '../components/tasks/KanbanBoard';
import CreateTaskModal from '../components/tasks/CreateTaskModal';
import { Search } from 'lucide-react';

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 flex flex-col h-full h-screen">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Tasks</h1>
          <p className="text-sm text-[var(--text-secondary)]">Stay on top of everything that needs to get done.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          + New Task
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search tasks..." 
            className="pl-9 pr-4 py-2 text-sm border border-[var(--border-primary)] rounded w-64 focus:outline-none focus:border-[var(--border-focus)]"
          />
        </div>
        <select className="px-3 py-2 text-sm border border-[var(--border-primary)] rounded bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]">
          <option>Filter by Project</option>
          <option>All Projects</option>
          <option>Website Redesign</option>
        </select>
        <select className="px-3 py-2 text-sm border border-[var(--border-primary)] rounded bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]">
          <option>Assignee</option>
          <option>All</option>
          <option>Alex Johnson</option>
        </select>
        <select className="px-3 py-2 text-sm border border-[var(--border-primary)] rounded bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]">
          <option>Priority</option>
          <option>All</option>
          <option>High</option>
        </select>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        <KanbanBoard />
      </div>

      <CreateTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
