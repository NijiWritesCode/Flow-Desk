import React from 'react';
import { Search, BookOpen, FolderKanban, CheckSquare, Users, FileText, BarChart3, Keyboard } from 'lucide-react';
import FaqAccordion from '../components/help/FaqAccordion';
import ContactSupport from '../components/help/ContactSupport';

export default function HelpPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Help & Support</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Find answers, learn how to use FlowDesk, or reach out to our team.</p>
        
        <div className="mt-8 max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for help articles, guides, and FAQs..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <button className="flex flex-col items-start p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left group">
          <div className="p-3 bg-indigo-50 rounded-md text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Getting Started</h3>
          <p className="text-sm text-slate-600">Learn the basics of setting up and using FlowDesk.</p>
        </button>

        <button className="flex flex-col items-start p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left group">
          <div className="p-3 bg-indigo-50 rounded-md text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
            <FolderKanban className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Managing Projects</h3>
          <p className="text-sm text-slate-600">Create, organize, and track your projects effectively.</p>
        </button>

        <button className="flex flex-col items-start p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left group">
          <div className="p-3 bg-indigo-50 rounded-md text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
            <CheckSquare className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Working with Tasks</h3>
          <p className="text-sm text-slate-600">Use the Kanban board, set priorities, and meet your deadlines.</p>
        </button>

        <button className="flex flex-col items-start p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left group">
          <div className="p-3 bg-indigo-50 rounded-md text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Client Management</h3>
          <p className="text-sm text-slate-600">Add clients, track relationships, and manage contact details.</p>
        </button>

        <button className="flex flex-col items-start p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left group">
          <div className="p-3 bg-indigo-50 rounded-md text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Invoicing & Payments</h3>
          <p className="text-sm text-slate-600">Create invoices, track payments, and manage your revenue.</p>
        </button>

        <button className="flex flex-col items-start p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left group">
          <div className="p-3 bg-indigo-50 rounded-md text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-1">Reports & Analytics</h3>
          <p className="text-sm text-slate-600">Understand your business performance with detailed reports.</p>
        </button>
      </div>

      <FaqAccordion />
      <ContactSupport />

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <Keyboard className="w-5 h-5 text-slate-500" />
          <h3 className="font-medium text-slate-900">Keyboard Shortcuts</h3>
        </div>
        <div className="p-0">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-600">Open search</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">Ctrl + K</kbd> or <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">Cmd + K</kbd></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-600">Create new item</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">N</kbd></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-600">Go to Projects</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">P</kbd></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-600">Go to Tasks</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">T</kbd></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-600">Go to Invoices</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">I</kbd></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-600">Close modal / drawer</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">Esc</kbd></td>
              </tr>
              <tr>
                <td className="p-4 text-slate-600">Show keyboard shortcuts</td>
                <td className="p-4 text-right"><kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-slate-700 font-mono text-xs">?</kbd></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
