import React from 'react';
import { DollarSign, FolderKanban, CheckSquare, FileText, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const summaryData = [
  {
    title: 'Total Revenue',
    value: '$12,845',
    icon: DollarSign,
    badgeText: '+18.4%',
    badgeIcon: TrendingUp,
    badgeColor: 'text-slate-800 bg-white/40',
    subtext: 'From the running month',
    cardBg: 'bg-[#C6AEDF]',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-700',
    iconBg: 'bg-white/40 text-slate-800'
  },
  {
    title: 'Average Earning',
    value: '$3,347',
    icon: FolderKanban,
    badgeText: '+3%',
    badgeColor: 'text-slate-800 bg-white/40',
    subtext: 'Daily earning of this month',
    cardBg: 'bg-[#85ADFF]',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-700',
    iconBg: 'bg-white/40 text-slate-800'
  },
  {
    title: 'Active Projects',
    value: '12',
    icon: CheckSquare,
    badgeText: '+2.4%',
    badgeIcon: TrendingUp,
    badgeColor: 'text-slate-800 bg-white/40',
    subtext: 'Greater than last month',
    cardBg: 'bg-[#65E7AC]',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-700',
    iconBg: 'bg-white/40 text-slate-800'
  },
  {
    title: 'Upgrade to Pro',
    value: '$4.20',
    icon: FileText,
    badgeText: 'Upgrade Now',
    badgeColor: 'text-teal-900 bg-[#C6F953] cursor-pointer hover:bg-[#b5e742]',
    subtext: '$50 Billed Annually',
    cardBg: 'bg-[#1E746A]',
    textColor: 'text-white',
    subTextColor: 'text-teal-100',
    iconBg: 'hidden'
  },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className={`${item.cardBg} rounded-[24px] shadow-sm relative overflow-hidden`}
        >
          {/* Glitter/Noise overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-color-burn" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
          {/* Barely noticeable white center radial gradient */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, transparent 65%)' }} 
          />
          
          {/* Content wrapper with z-index to appear above the overlays */}
          <div className="relative z-10 p-6 flex flex-col h-full">
            <div className="flex items-start justify-between">
              <div className={`flex items-center gap-2 ${item.textColor}`}>
                {item.iconBg !== 'hidden' && (
                  <div className={`p-2 rounded-full ${item.iconBg}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                )}
                <p className="text-sm font-semibold tracking-wide">{item.title}</p>
              </div>
            </div>
            
            <div className="mt-6 mb-2">
              <h3 className={`text-4xl font-bold tracking-tight ${item.textColor}`}>{item.value}</h3>
              {item.title === 'Upgrade to Pro' && <span className={`text-sm font-medium ${item.subTextColor}`}> / Month</span>}
            </div>
            
            <p className={`text-xs font-medium ${item.subTextColor} mb-6`}>{item.subtext}</p>
            
            <div className="mt-auto">
              <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-sm ${item.badgeColor}`}>
                {item.badgeIcon && <item.badgeIcon className="w-3 h-3" />}
                {item.badgeText}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
