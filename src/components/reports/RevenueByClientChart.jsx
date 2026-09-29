import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Nova Health', value: 12400, color: '#3B82F6' },
  { name: 'Kora Interiors', value: 8500, color: '#6366F1' },
  { name: 'Bright Foods', value: 7800, color: '#14B8A6' },
  { name: 'Maison Studio', value: 6000, color: '#A855F7' },
  { name: 'Others', value: 1700, color: '#94A3B8' },
];

export default function RevenueByClientChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Revenue by Client</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`$${value}`, 'Revenue']}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-slate-700">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-slate-900">${item.value.toLocaleString()}</span>
              <span className="text-slate-500 text-xs w-8 text-right">{Math.round((item.value/36400)*100)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
