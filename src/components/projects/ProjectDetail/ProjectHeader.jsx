import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectHeader() {
  return (
    <div className="mb-8">
      <nav className="flex items-center text-sm font-medium text-slate-500 mb-4">
        <Link to="/projects" className="hover:text-indigo-600 transition-colors">Projects</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Website Redesign</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900">Website Redesign</h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
              In Progress
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-slate-500">
            <div>
              Client: <Link to="/clients/kora-interiors" className="font-medium text-slate-900 hover:text-indigo-600">Kora Interiors</Link>
            </div>
            <div>
              Deadline: <span className="font-medium text-slate-900">October 4, 2026</span>
            </div>
            <div>
              Created: <span className="font-medium text-slate-900">August 15, 2026</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            Edit Project
          </button>
          <button className="p-2 text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm hover:text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
