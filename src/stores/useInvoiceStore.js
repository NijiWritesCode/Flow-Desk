import { create } from 'zustand';
import { invoices as mockInvoices } from '../data';

const useInvoiceStore = create((set, get) => ({
  invoices: mockInvoices || [],
  
  addInvoice: (invoice) => set((state) => ({ 
    invoices: [...state.invoices, { ...invoice, id: Date.now().toString() }] 
  })),
  
  updateInvoice: (id, updates) => set((state) => ({
    invoices: state.invoices.map(i => i.id === id ? { ...i, ...updates } : i)
  })),
  
  deleteInvoice: (id) => set((state) => ({
    invoices: state.invoices.filter(i => i.id !== id)
  })),
  
  markAsPaid: (id) => set((state) => ({
    invoices: state.invoices.map(i => i.id === id ? { ...i, status: 'Paid' } : i)
  }))
}));

export default useInvoiceStore;
