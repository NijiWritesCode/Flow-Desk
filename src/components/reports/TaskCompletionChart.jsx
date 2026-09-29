import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'W1', completed: 12 },
  { week: 'W2', completed: 18 },
  { week: 'W3', completed: 15 },
  { week: 'W4', completed: 25 },
  { week: 'W5', completed: 22 },
  { week: 'W6', completed: 30 },
  { week: 'W7', completed: 35 },
  { week: 'W8', completed: 42 },
];

export default function TaskCompletionChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Task Completion</h3>
          <p className="text-sm text-slate-500 mt-1">73% completion rate</p>
        </div>
        <div className="text-2xl font-bold text-slate-900">42</div>
      </div>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Line type="monotone" dataKey="completed" stroke="var(--accent-primary, #4F46E5)" strokeWidth={3} dot={{ r: 4, fill: '#4F46E5', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-sm text-slate-600">You completed 42 tasks this month, up from 35 last month.</p>
    </div>
  );
}
