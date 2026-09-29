import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// We assume there's a main layout that includes the sidebar and header
import { AppLayout } from './components/layout/AppLayout';

// Lazy loaded pages
const Overview = lazy(() => import('./pages/OverviewPage'));
const Projects = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetailPage'));
const Tasks = lazy(() => import('./pages/TasksPage'));
const Clients = lazy(() => import('./pages/ClientsPage'));
const ClientDetails = lazy(() => import('./pages/ClientDetailPage'));
const Invoices = lazy(() => import('./pages/InvoicesPage'));
const Reports = lazy(() => import('./pages/ReportsPage'));
const Help = lazy(() => import('./pages/HelpPage'));
const Settings = lazy(() => import('./pages/SettingsPage'));

// Settings Sub-pages
const ProfileSettings = lazy(() => import('./components/settings/ProfileSettings'));
const NotificationSettings = lazy(() => import('./components/settings/NotificationSettings'));
const AppearanceSettings = lazy(() => import('./components/settings/AppearanceSettings'));
const TeamSettings = lazy(() => import('./components/settings/TeamSettings'));
const BillingSettings = lazy(() => import('./components/settings/BillingSettings'));

const FullPageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-primary">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Overview />} />
          
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":slug" element={<ProjectDetails />} />
          </Route>
          
          <Route path="tasks" element={<Tasks />} />
          
          <Route path="clients">
            <Route index element={<Clients />} />
            <Route path=":slug" element={<ClientDetails />} />
          </Route>
          
          <Route path="invoices" element={<Invoices />} />
          <Route path="reports" element={<Reports />} />
          <Route path="help" element={<Help />} />
          
          <Route path="settings" element={<Settings />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="notifications" element={<NotificationSettings />} />
            <Route path="appearance" element={<AppearanceSettings />} />
            <Route path="team" element={<TeamSettings />} />
            <Route path="billing" element={<BillingSettings />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
