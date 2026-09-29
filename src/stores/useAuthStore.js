import { create } from 'zustand';
import { currentUser } from '../data';

const useAuthStore = create((set) => ({
  user: currentUser || {
    id: 'u1',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex@flowdesk.com',
    initials: 'AJ',
    jobTitle: 'Lead Designer & Developer',
    role: 'Owner'
  },
  isAuthenticated: true, // Assuming true for the authenticated app view
  
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateProfile: (data) => set((state) => ({ user: { ...state.user, ...data } }))
}));

export default useAuthStore;
