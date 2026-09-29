import { create } from 'zustand';
import { clients as mockClients } from '../data';

const useClientStore = create((set, get) => ({
  clients: mockClients || [],
  
  addClient: (client) => set((state) => ({ 
    clients: [...state.clients, { ...client, id: Date.now().toString() }] 
  })),
  
  updateClient: (id, updates) => set((state) => ({
    clients: state.clients.map(c => c.id === id ? { ...c, ...updates } : c)
  })),
  
  deleteClient: (id) => set((state) => ({
    clients: state.clients.filter(c => c.id !== id)
  })),

  getClientBySlug: (slug) => {
    return get().clients.find(c => c.slug === slug);
  }
}));

export default useClientStore;
