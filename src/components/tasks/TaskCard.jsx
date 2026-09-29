import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';

export default function TaskCard({ task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const priorityColors = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-amber-100 text-amber-700',
    Low: 'bg-green-100 text-green-700'
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      layout
      whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
      className={`bg-[var(--bg-secondary)] p-4 rounded-md shadow-sm border border-[var(--border-primary)] cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-50 scale-105' : 'opacity-100'}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className={`text-sm font-medium ${task.isCompleted ? 'line-through text-[var(--text-tertiary)]' : 'text-[var(--text-primary)]'}`}>
          {task.title}
        </h4>
        {task.priority && (
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
        )}
      </div>
      
      {!task.isCompleted ? (
        <>
          <p className="text-xs text-[var(--text-secondary)] mb-3">{task.project}</p>
          <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)]">
            <span>Due: {task.due}</span>
            <div className="w-6 h-6 rounded-full bg-[var(--accent-light)] text-[var(--accent-primary)] flex items-center justify-center font-semibold text-[10px]">
              {task.assignee}
            </div>
          </div>
        </>
      ) : (
        <div className="text-xs text-[var(--text-tertiary)] mt-2">
          Completed {task.completedAt}
        </div>
      )}
    </motion.div>
  );
}
