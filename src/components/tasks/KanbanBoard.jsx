import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import KanbanColumn from './KanbanColumn';
import TaskCard from './TaskCard';

// Dummy data for initial tasks
const defaultColumns = [
  { id: 'backlog', title: 'Backlog', count: 3 },
  { id: 'in-progress', title: 'In Progress', count: 2 },
  { id: 'in-review', title: 'In Review', count: 2 },
  { id: 'completed', title: 'Completed', count: 4 },
];

const defaultTasks = {
  'backlog': [
    { id: 't1', title: 'Create navigation component', project: 'Website Redesign', priority: 'High', due: 'Oct 01', assignee: 'SW' },
    { id: 't2', title: 'Setup staging server', project: 'Website Redesign', priority: 'Medium', due: 'Oct 03', assignee: 'AJ' },
    { id: 't3', title: 'Research competitor pricing', project: 'Q4 Marketing Campaign', priority: 'Low', due: 'Oct 10', assignee: 'DC' },
  ],
  'in-progress': [
    { id: 't4', title: 'Implement responsive layout', project: 'Website Redesign', priority: 'High', due: 'Today', assignee: 'SW' },
    { id: 't5', title: 'Design onboarding screens', project: 'Mobile App UI', priority: 'Medium', due: 'Oct 02', assignee: 'AJ' },
  ],
  'in-review': [
    { id: 't6', title: 'Finalize hero images', project: 'Website Redesign', priority: 'Medium', due: 'Sep 29', assignee: 'DC' },
    { id: 't7', title: 'Write API documentation', project: 'Mobile App UI', priority: 'Low', due: 'Oct 05', assignee: 'SW' },
  ],
  'completed': [
    { id: 't8', title: 'Create homepage wireframe', completedAt: 'Sep 25', isCompleted: true },
    { id: 't9', title: 'Setup project repository', completedAt: 'Sep 20', isCompleted: true },
    { id: 't10', title: 'Client kickoff meeting', completedAt: 'Sep 18', isCompleted: true },
    { id: 't11', title: 'Design system tokens', completedAt: 'Sep 15', isCompleted: true },
  ]
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;
    
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    // Logic to move between columns can go here if needed
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setActiveId(null);
  };

  // Helper to find task by id
  let activeTask = null;
  if (activeId) {
    for (const col of Object.values(tasks)) {
      const t = col.find(task => task.id === activeId);
      if (t) { activeTask = t; break; }
    }
  }

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 pt-2">
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {defaultColumns.map(column => (
          <KanbanColumn 
            key={column.id} 
            column={column} 
            tasks={tasks[column.id] || []} 
          />
        ))}

        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
