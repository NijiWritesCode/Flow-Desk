import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, List, Search } from 'lucide-react';
import ProjectList from '../components/projects/ProjectList';
import ProjectCard from '../components/projects/ProjectCard';
import CreateProjectModal from '../components/projects/CreateProjectModal';
import { useNavigate } from 'react-router-dom';

const mockProjects = [
  { id: 1, name: 'Website Redesign', client: 'Kora Interiors', progress: 72, deadline: 'Oct 04, 2026', status: 'In Progress', statusColor: 'bg-blue-50 text-blue-700', team: [{initials: 'AJ'}, {initials: 'SW'}], slug: 'website-redesign' },
  { id: 2, name: 'Mobile App UI', client: 'Nova Health', progress: 45, deadline: 'Oct 08, 2026', status: 'In Progress', statusColor: 'bg-blue-50 text-blue-700', team: [{initials: 'DC'}, {initials: 'AJ'}], slug: 'mobile-app-ui' },
  { id: 3, name: 'Brand Identity', client: 'Maison Studio', progress: 100, deadline: 'Sep 28, 2026', status: 'Completed', statusColor: 'bg-green-50 text-green-700', team: [{initials: 'SW'}], slug: 'brand-identity' },
  { id: 4, name: 'Q4 Marketing Campaign', client: 'Zenith Corp', progress: 15, deadline: 'Oct 22, 2026', status: 'At Risk', statusColor: 'bg-amber-50 text-amber-700', team: [{initials: 'AJ'}, {initials: 'DC'}], slug: 'q4-marketing-campaign' },
  { id: 5, name: 'E-commerce Platform', client: 'Bright Foods', progress: 60, deadline: 'Nov 01, 2026', status: 'In Progress', statusColor: 'bg-blue-50 text-blue-700', team: [{initials: 'SW'}, {initials: 'AJ'}, {initials: 'DC'}], slug: 'ecommerce-platform' },
  { id: 6, name: 'Social Media Kit', client: 'Pulse Agency', progress: 30, deadline: 'Oct 15, 2026', status: 'On Hold', statusColor: 'bg-slate-100 text-slate-700', team: [{initials: 'DC'}], slug: 'social-media-kit' },
  { id: 7, name: 'Annual Report Design', client: 'Civic Trust', progress: 88, deadline: 'Sep 30, 2026', status: 'In Progress', statusColor: 'bg-blue-50 text-blue-700', team: [{initials: 'AJ'}], slug: 'annual-report' },
  { id: 8, name: 'Landing Page Redesign', client: 'Apex Digital', progress: 0, deadline: 'Nov 10, 2026', status: 'Not Started', statusColor: 'bg-slate-100 text-slate-700', team: [{initials: 'SW'}, {initials: 'DC'}], slug: 'landing-page' },
];

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="text-slate-500 mt-1">Manage your work and keep every project on track.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          + New Project
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <select className="border border-slate-300 rounded-md text-sm py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white">
            <option>All Statuses</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>At Risk</option>
            <option>On Hold</option>
          </select>
          <select className="border border-slate-300 rounded-md text-sm py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white hidden sm:block">
            <option>Sort by Deadline</option>
            <option>Sort by Name</option>
            <option>Sort by Client</option>
            <option>Sort by Progress</option>
          </select>
        </div>

        <div className="flex items-center p-1 bg-slate-100 rounded-md self-end md:self-auto">
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <ProjectList projects={mockProjects} onProjectClick={handleProjectClick} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map(project => (
            <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </div>
      )}

      <CreateProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
}
