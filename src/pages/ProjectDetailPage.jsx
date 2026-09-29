import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/projects/ProjectDetail/ProjectHeader';
import ProjectMilestones from '../components/projects/ProjectDetail/ProjectMilestones';
import ProjectTeam from '../components/projects/ProjectDetail/ProjectTeam';

export default function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Tasks', 'Files', 'Activity'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <ProjectHeader />

      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">About this Project</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete redesign of the Kora Interiors marketing website, focusing on a modern aesthetic, improved user experience, and higher conversion rates. The project includes a full design phase, responsive development, CMS integration, and performance optimization.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Progress</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div className="bg-indigo-600 h-2 rounded-full" initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 0.6 }} />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">72%</span>
                </div>
                <p className="text-xs text-slate-500">18 of 25 tasks completed</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Budget</p>
                <p className="text-lg font-semibold text-slate-900 mb-1">$6,500</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mb-1">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '72%' }} />
                </div>
                <p className="text-xs text-slate-500">$4,680 spent</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Timeline</p>
                <p className="text-sm font-medium text-slate-900 mb-1">51 days elapsed</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mb-1">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }} />
                </div>
                <p className="text-xs text-slate-500">7 days remaining</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ProjectTeam />
            <ProjectMilestones />
          </div>
        </div>
      )}

      {activeTab === 'Tasks' && (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center text-slate-500">
          Task board content will be displayed here.
        </div>
      )}

      {activeTab === 'Files' && (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center text-slate-500">
          Project files will be displayed here.
        </div>
      )}

      {activeTab === 'Activity' && (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center text-slate-500">
          Activity timeline will be displayed here.
        </div>
      )}
    </motion.div>
  );
}
