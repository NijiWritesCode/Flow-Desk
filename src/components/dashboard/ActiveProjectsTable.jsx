import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, name: 'Website Redesign', client: 'Kora Interiors', progress: 72, deadline: 'Oct 04', status: 'In Progress', statusColor: 'bg-blue-50 text-blue-700' },
  { id: 2, name: 'Mobile App UI', client: 'Nova Health', progress: 45, deadline: 'Oct 08', status: 'In Progress', statusColor: 'bg-blue-50 text-blue-700' },
  { id: 3, name: 'Brand Identity', client: 'Maison Studio', progress: 100, deadline: 'Sep 28', status: 'Completed', statusColor: 'bg-green-50 text-green-700' },
  { id: 4, name: 'Q4 Marketing Campaign', client: 'Zenith Corp', progress: 15, deadline: 'Oct 22', status: 'At Risk', statusColor: 'bg-amber-50 text-amber-700' },
];

export default function ActiveProjectsTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Active Projects</h2>
        <a href="/projects" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
          View all projects →
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Deadline</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{project.client}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-slate-200 rounded-full h-2 w-24">
                      <motion.div
                        className="bg-indigo-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-xs text-slate-500">{project.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{project.deadline}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.statusColor}`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
