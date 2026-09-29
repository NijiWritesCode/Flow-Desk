import React from 'react';
import ClientCard from './ClientCard';

const dummyClients = [
  { id: '1', initials: 'KI', name: 'Kora Interiors', status: 'Active', contact: 'Emma Lawson', email: 'emma@korainteriors.com', activeProjects: 2, revenue: 8500, lastActivity: 'Today', color: '#0d9488' },
  { id: '2', initials: 'NH', name: 'Nova Health', status: 'Active', contact: 'Dr. James Okafor', email: 'james@novahealth.io', activeProjects: 1, revenue: 12400, lastActivity: '1 hour ago', color: '#2563eb' },
  { id: '3', initials: 'MS', name: 'Maison Studio', status: 'Active', contact: 'Claire Dubois', email: 'claire@maisonstudio.co', activeProjects: 1, revenue: 6000, lastActivity: '2 days ago', color: '#9333ea' },
  { id: '4', initials: 'ZC', name: 'Zenith Corp', status: 'Active', contact: 'Mark Stevens', email: 'mark@zenithcorp.com', activeProjects: 1, revenue: 3200, lastActivity: '3 days ago', color: '#d97706' },
  { id: '5', initials: 'BF', name: 'Bright Foods', status: 'Active', contact: 'Lisa Nakamura', email: 'lisa@brightfoods.com', activeProjects: 1, revenue: 7800, lastActivity: '1 week ago', color: '#16a34a' },
  { id: '6', initials: 'PA', name: 'Pulse Agency', status: 'Inactive', contact: 'Tom Rivera', email: 'tom@pulseagency.co', activeProjects: 0, revenue: 4500, lastActivity: '3 weeks ago', color: '#e11d48' },
];

export default function ClientList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {dummyClients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
}
