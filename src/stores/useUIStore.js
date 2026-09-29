import { create } from 'zustand';

const useUIStore = create((set) => ({
  theme: 'light', // light, dark, system
  sidebarOpen: false,
  activeModal: null, // 'create-project', 'create-task', 'create-client', 'create-invoice', null
  notificationDrawerOpen: false,
  searchOpen: false,

  setTheme: (theme) => set({ theme }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
  openModal: (modalName) => set({ activeModal: modalName }),
  closeModal: () => set({ activeModal: null }),
  toggleNotificationDrawer: () => set((state) => ({ notificationDrawerOpen: !state.notificationDrawerOpen })),
  setSearchOpen: (isOpen) => set({ searchOpen: isOpen }),
}));

export default useUIStore;
