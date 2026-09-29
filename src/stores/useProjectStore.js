import { create } from 'zustand';
import { projects as mockProjects } from '../data';

const useProjectStore = create((set, get) => ({
  projects: mockProjects || [],
  
  addProject: (project) => set((state) => ({ 
    projects: [...state.projects, { ...project, id: Date.now().toString() }] 
  })),
  
  updateProject: (id, updates) => set((state) => ({
    projects: state.projects.map(p => p.id === id ? { ...p, ...updates } : p)
  })),
  
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter(p => p.id !== id)
  })),

  getProjectBySlug: (slug) => {
    return get().projects.find(p => p.slug === slug);
  }
}));

export default useProjectStore;
