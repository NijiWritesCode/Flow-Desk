import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';

export default function KanbanColumn({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex-shrink-0 w-80 bg-[var(--bg-hover)] rounded-md flex flex-col max-h-full">
      <div className="p-3 flex items-center justify-between border-b border-[var(--border-primary)]">
        <h3 className="font-medium text-[var(--text-primary)]">{column.title}</h3>
        <span className="bg-[var(--border-primary)] text-[var(--text-secondary)] text-xs font-semibold px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      
      <div 
        ref={setNodeRef} 
        className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[150px]"
      >
        <SortableContext 
          id={column.id} 
          items={tasks.map(t => t.id)} 
          strategy={verticalListSortingStrategy}
        >
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
        
        <button className="w-full py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-secondary)] rounded flex items-center justify-center transition-colors">
          + Add task
        </button>
      </div>
    </div>
  );
}
