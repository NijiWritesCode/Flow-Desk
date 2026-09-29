import React from 'react';

const data = [
  { name: 'Completed', value: 8, color: '#16A34A' },
  { name: 'In Progress', value: 5, color: '#2563EB' },
  { name: 'At Risk', value: 1, color: '#D97706' },
  { name: 'On Hold', value: 1, color: '#64748B' },
  { name: 'Not Started', value: 1, color: '#CBD5E1' },
];

export default function ProjectStatusChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Project Status Overview</h3>
      <div className="w-full h-12 flex rounded-md overflow-hidden mb-6">
        {data.map((item, idx) => (
          <div 
            key={idx} 
            style={{ width: `${(item.value / 16) * 100}%`, backgroundColor: item.color }} 
            className="h-full border-r border-white last:border-0 hover:opacity-90 transition-opacity relative group"
          >
            <div className="absolute opacity-0 group-hover:opacity-100 -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity pointer-events-none">
              {item.name}: {item.value}
            </div>
          </div>
        ))}
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-sm font-medium text-slate-500">
              <th className="pb-3 pr-4">Project</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 px-4">Deadline</th>
              <th className="pb-3 pl-4 text-right">Progress</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <td className="py-3 pr-4 font-medium text-slate-900">Website Redesign</td>
              <td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">In Progress</span></td>
              <td className="py-3 px-4 text-slate-600">Oct 04, 2026</td>
              <td className="py-3 pl-4 text-right">72%</td>
            </tr>
            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <td className="py-3 pr-4 font-medium text-slate-900">Mobile App UI</td>
              <td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">In Progress</span></td>
              <td className="py-3 px-4 text-slate-600">Oct 08, 2026</td>
              <td className="py-3 pl-4 text-right">45%</td>
            </tr>
            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <td className="py-3 pr-4 font-medium text-slate-900">Brand Identity</td>
              <td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">Completed</span></td>
              <td className="py-3 px-4 text-slate-600">Sep 28, 2026</td>
              <td className="py-3 pl-4 text-right">100%</td>
            </tr>
            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <td className="py-3 pr-4 font-medium text-slate-900">Q4 Marketing</td>
              <td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700">At Risk</span></td>
              <td className="py-3 px-4 text-slate-600">Oct 22, 2026</td>
              <td className="py-3 pl-4 text-right">15%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
