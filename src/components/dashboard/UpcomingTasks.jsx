import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialTasks = [
  { id: 1, title: 'Finalize homepage animations', project: 'Website Redesign', due: 'Today', priority: 'High', priorityColor: 'bg-red-500' },
  { id: 2, title: 'Send invoice to Kora Interiors', project: 'Billing', due: 'Tomorrow', priority: 'Medium', priorityColor: 'bg-amber-500' },
  { id: 3, title: 'Prepare app icon assets', project: 'Mobile App UI', due: 'Sep 30', priority: 'Medium', priorityColor: 'bg-amber-500' },
  { id: 4, title: 'Draft project proposal for Zenith', project: 'Client Outreach', due: 'Oct 02', priority: 'Low', priorityColor: 'bg-green-500' },
];

export default function UpcomingTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleComplete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Upcoming Tasks</h2>
      </div>
      <div className="p-2 flex-1">
        <ul className="space-y-1">
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.li
                key={task.id}
                initial={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors group"
              >
                <input
                  type="checkbox"
                  onChange={() => handleComplete(task.id)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 transition-all cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                    {task.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {task.project} — Due: <span className="font-semibold">{task.due}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-1 sm:mt-0">
                  <span className={`w-2 h-2 rounded-full ${task.priorityColor}`} />
                  <span className="text-xs font-medium text-slate-500 hidden sm:inline-block">Priority</span>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
          {tasks.length === 0 && (
            <li className="p-4 text-center text-sm text-slate-500">No upcoming tasks!</li>
          )}
        </ul>
      </div>
    </div>
  );
}
