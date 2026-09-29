import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const datasets = {
  '7 Days': {
    data: [
      { name: 'Mon', value: 1200 },
      { name: 'Tue', value: 1900 },
      { name: 'Wed', value: 1500 },
      { name: 'Thu', value: 2200 },
      { name: 'Fri', value: 2800 },
      { name: 'Sat', value: 1400 },
      { name: 'Sun', value: 1800 },
    ],
    total: '$12,800',
    trend: '+5%',
    trendPositive: true,
  },
  '30 Days': {
    data: [
      { name: 'Sep 1', value: 4000 },
      { name: 'Sep 5', value: 3000 },
      { name: 'Sep 10', value: 5000 },
      { name: 'Sep 15', value: 4500 },
      { name: 'Sep 20', value: 6000 },
      { name: 'Sep 25', value: 7000 },
      { name: 'Sep 28', value: 8921 },
    ],
    total: '$38,421',
    trend: '+12%',
    trendPositive: true,
  },
  '90 Days': {
    data: [
      { name: 'Jul', value: 15000 },
      { name: 'Aug', value: 12000 },
      { name: 'Sep', value: 28000 },
      { name: 'Oct', value: 19000 },
      { name: 'Nov', value: 31000 },
      { name: 'Dec', value: 38421 },
    ],
    total: '$143,421',
    trend: '+24%',
    trendPositive: true,
  },
  '12 Months': {
    data: [
      { name: 'Jan', value: 22000 },
      { name: 'Mar', value: 28000 },
      { name: 'May', value: 24000 },
      { name: 'Jul', value: 32000 },
      { name: 'Sep', value: 38000 },
      { name: 'Nov', value: 45000 },
    ],
    total: '$389,000',
    trend: '-2%',
    trendPositive: false,
  },
};

export default function RevenueChart() {
  const [activeTab, setActiveTab] = useState('30 Days');

  const currentData = useMemo(() => datasets[activeTab], [activeTab]);

  return (
    <div className="bg-white rounded-[24px] shadow-sm p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Revenue Overview</h2>
        <div className="flex space-x-1 bg-slate-50 p-1.5 rounded-full border border-slate-100">
          {['7 Days', '30 Days', '90 Days', '12 Months'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#C6F953] text-teal-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-bold text-slate-800">{currentData.total}</div>
        <div className="flex items-center gap-2 mt-2">
          {currentData.trendPositive ? (
            <TrendingUp className="w-4 h-4 text-[#289C8E]" />
          ) : (
            <TrendingDown className="w-4 h-4 text-rose-500" />
          )}
          <span className={`text-sm font-medium ${currentData.trendPositive ? 'text-[#289C8E]' : 'text-rose-500'}`}>
            {currentData.trend} vs previous period
          </span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currentData.data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#289C8E" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#289C8E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(val) => `$${val}`} />
            <Tooltip
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              itemStyle={{ color: '#0F172A', fontWeight: 600 }}
              formatter={(value) => [`$${value}`, 'Revenue']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#289C8E" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              animationDuration={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
