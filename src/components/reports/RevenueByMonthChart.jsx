import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Apr', value: 2100 },
  { name: 'May', value: 2800 },
  { name: 'Jun', value: 3400 },
  { name: 'Jul', value: 3100 },
  { name: 'Aug', value: 4200 },
  { name: 'Sep', value: 5900 },
];

export default function RevenueByMonthChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Revenue by Month</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} tickFormatter={(val) => `$${val}`} />
            <Tooltip 
              cursor={{ fill: '#F1F5F9' }} 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              formatter={(value) => [`$${value}`, 'Revenue']}
            />
            <Bar dataKey="value" fill="var(--accent-primary, #4F46E5)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-sm text-slate-600">September is your highest-earning month so far. Revenue has grown 42% since April.</p>
    </div>
  );
}
