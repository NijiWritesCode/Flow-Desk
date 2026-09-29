import React from 'react';
import { motion } from 'framer-motion';
import SummaryCards from '../components/dashboard/SummaryCards';
import RevenueChart from '../components/dashboard/RevenueChart';
import ActiveProjectsTable from '../components/dashboard/ActiveProjectsTable';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function OverviewPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Good morning, Alex.</h1>
        <p className="text-slate-500 mt-1">
          Here's what's happening with your work today. <span className="font-medium text-slate-600">Monday, September 28, 2026</span>
        </p>
      </header>

      <div className="space-y-6">
        <SummaryCards />
        
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <ActiveProjectsTable />
          </div>
          <div className="lg:col-span-2">
            <UpcomingTasks />
          </div>
        </div>

        <RecentActivity />
      </div>
    </motion.div>
  );
}
