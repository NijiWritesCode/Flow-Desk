import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Alex Johnson', initials: 'AJ', email: 'alex@flowdesk.com', role: 'Owner', status: 'Active', statusColor: 'bg-green-50 text-green-700', isOwner: true },
  { id: 2, name: 'Sarah Williams', initials: 'SW', email: 'sarah@flowdesk.com', role: 'Admin', status: 'Active', statusColor: 'bg-green-50 text-green-700', isOwner: false },
  { id: 3, name: 'David Chen', initials: 'DC', email: 'david@flowdesk.com', role: 'Member', status: 'Active', statusColor: 'bg-green-50 text-green-700', isOwner: false },
  { id: 4, name: 'pending@client.com', initials: '—', email: 'pending@client.com', role: 'Viewer', status: 'Pending Invite', statusColor: 'bg-amber-50 text-amber-700', isOwner: false },
];

export default function TeamSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Team Members</h2>
          <p className="text-sm text-slate-500 mt-1">Manage who has access to your workspace.</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
          + Invite Member
        </button>
      </div>

      <div className="overflow-x-auto rounded-md border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-600">
              <th className="py-3 px-4">Member</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-200">
            {teamMembers.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-xs">
                      {member.initials}
                    </div>
                    <span className="font-medium text-slate-900">{member.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-600">{member.email}</td>
                <td className="py-3 px-4 text-slate-600">{member.role}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${member.statusColor}`}>
                    {member.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  {!member.isOwner ? (
                    <div className="flex justify-end gap-3">
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-700 font-medium">Remove</button>
                    </div>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
