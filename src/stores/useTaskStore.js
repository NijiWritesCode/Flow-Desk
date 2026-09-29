import { create } from 'zustand';
import { tasks as mockTasks } from '../data';

const useTaskStore = create((set, get) => ({
  tasks: mockTasks || [],
  
  addTask: (task) => set((state) => ({ 
    tasks: [...state.tasks, { ...task, id: Date.now().toString() }] 
  })),
  
  updateTask: (id, updates) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t)
  })),
  
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  })),

  moveTask: (taskId, newStatus) => set((state) => ({
    tasks: state.tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t)
  })),

  getTasksByProjectId: (projectId) => {
    return get().tasks.filter(t => t.projectId === projectId);
  }
}));

export default useTaskStore;
