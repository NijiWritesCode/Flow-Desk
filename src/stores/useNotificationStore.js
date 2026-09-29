import { create } from 'zustand';
import { notifications as mockNotifications } from '../data';

const useNotificationStore = create((set, get) => ({
  notifications: mockNotifications || [],
  
  addNotification: (notification) => set((state) => ({ 
    notifications: [{ ...notification, id: Date.now().toString(), read: false, createdAt: new Date().toISOString() }, ...state.notifications] 
  })),
  
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n)
  })),
  
  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true }))
  })),

  clearNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),

  getUnreadCount: () => {
    return get().notifications.filter(n => !n.read).length;
  }
}));

export default useNotificationStore;
