import React from 'react';
import { Check } from 'lucide-react';

const milestones = [
  { id: 1, title: 'Discovery & Strategy', status: 'completed', date: 'Completed Sep 1' },
  { id: 2, title: 'UI/UX Design', status: 'completed', date: 'Completed Sep 18' },
  { id: 3, title: 'Development', status: 'active', date: 'In Progress (Due Oct 1)' },
  { id: 4, title: 'Launch & Handover', status: 'pending', date: 'Pending (Due Oct 4)' },
];

export default function ProjectMilestones() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Milestones</h3>
      <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-6">
            <span
              className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ring-4 ring-white flex items-center justify-center ${
                milestone.status === 'completed'
                  ? 'bg-green-500 text-white'
                  : milestone.status === 'active'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-200 border-2 border-white'
              }`}
            >
              {milestone.status === 'completed' && <Check className="w-3 h-3" />}
              {milestone.status === 'active' && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
            </span>
            <div className="flex flex-col">
              <span className={`text-sm font-medium ${milestone.status === 'pending' ? 'text-slate-500' : 'text-slate-900'}`}>
                {milestone.title}
              </span>
              <span className="text-xs text-slate-500 mt-1">{milestone.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
