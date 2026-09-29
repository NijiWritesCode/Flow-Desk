import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

export default function InvoiceForm({ isOpen, onClose }) {
  const [lineItems, setLineItems] = useState([
    { description: '', quantity: 1, rate: 0 }
  ]);
  const [taxRate, setTaxRate] = useState(0);

  if (!isOpen) return null;

  const handleAddLine = () => {
    setLineItems([...lineItems, { description: '', quantity: 1, rate: 0 }]);
  };

  const handleRemoveLine = (index) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter((_, i) => i !== index));
    }
  };

  const handleLineChange = (index, field, value) => {
    const updated = [...lineItems];
    updated[index][field] = value;
    setLineItems(updated);
  };

  const subtotal = lineItems.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute right-0 top-0 bottom-0 bg-[var(--bg-secondary)] shadow-xl w-full max-w-2xl flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b border-[var(--border-primary)]">
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Create a New Invoice</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Invoice #FD-1049</p>
            </div>
            <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[var(--text-primary)]">Client *</label>
                <select className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm bg-transparent">
                  <option value="">Select a client</option>
                  <option value="c1">Kora Interiors</option>
                  <option value="c2">Nova Health</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[var(--text-primary)]">Project (Optional)</label>
                <select className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm bg-transparent">
                  <option value="">Select a project</option>
                  <option value="p1">Website Redesign</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[var(--text-primary)]">Issue Date *</label>
                <input 
                  type="date"
                  className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[var(--text-primary)]">Due Date *</label>
                <input 
                  type="date"
                  className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm bg-transparent"
                />
              </div>
            </div>

            <div className="border-t border-[var(--border-primary)] pt-6 mt-2">
              <h3 className="text-sm font-medium text-[var(--text-primary)] mb-4">Line Items</h3>
              
              <div className="space-y-3">
                <div className="grid grid-cols-12 gap-3 text-xs font-medium text-[var(--text-secondary)] pb-2 border-b border-[var(--border-primary)]">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2">Qty</div>
                  <div className="col-span-2">Rate</div>
                  <div className="col-span-2 text-right pr-6">Amount</div>
                </div>

                {lineItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-6">
                      <input 
                        type="text" 
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) => handleLineChange(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="number" 
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleLineChange(index, 'quantity', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="number" 
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) => handleLineChange(index, 'rate', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm"
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-between">
                      <span className="text-sm font-medium">${(item.quantity * item.rate).toFixed(2)}</span>
                      <button 
                        onClick={() => handleRemoveLine(index)}
                        className="text-[var(--status-danger)] p-1 hover:bg-red-50 rounded"
                        disabled={lineItems.length === 1}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleAddLine}
                className="mt-4 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors"
              >
                + Add Line Item
              </button>
            </div>

            <div className="flex flex-col gap-1 border-t border-[var(--border-primary)] pt-6 mt-2">
              <label className="text-sm font-medium text-[var(--text-primary)]">Notes</label>
              <textarea 
                placeholder="Payment terms, thank you message, etc." 
                rows={3}
                className="px-3 py-2 border border-[var(--border-primary)] rounded focus:outline-none focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)] text-sm resize-none"
              />
            </div>
            
            <div className="bg-[var(--bg-hover)] p-4 rounded-md">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-[var(--text-secondary)]">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-4">
                <span className="text-[var(--text-secondary)] flex items-center gap-2">
                  Tax % 
                  <input 
                    type="number" 
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-xs border border-[var(--border-primary)] rounded"
                  />
                </span>
                <span className="font-medium">${taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold border-t border-[var(--border-primary)] pt-4">
                <span className="text-[var(--text-primary)]">Total</span>
                <span className="text-[var(--text-primary)]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-[var(--border-primary)] flex justify-end gap-3 bg-[var(--bg-secondary)]">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded transition-colors"
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 text-sm font-medium border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] rounded transition-colors"
            >
              Save as Draft
            </button>
            <button 
              className="px-4 py-2 text-sm font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded transition-colors"
            >
              Create & Send Invoice
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
