import React, { useState } from 'react';
import { Paperclip, Loader2 } from 'lucide-react';

export default function ContactSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mt-8">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Still need help?</h3>
      <p className="text-slate-600 mb-6">Our support team typically responds within 2 hours during business days.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
          <input 
            type="text" 
            required 
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="What do you need help with?"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
          <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option>General Question</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Billing</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
          <textarea 
            required
            rows={4}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="Describe your issue in detail..."
          />
        </div>
        
        <div>
          <button type="button" className="flex items-center gap-2 text-sm text-indigo-600 font-medium hover:text-indigo-700">
            <Paperclip className="w-4 h-4" />
            Attach files (optional)
          </button>
        </div>
        
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 flex items-center justify-center gap-2 transition-colors"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
