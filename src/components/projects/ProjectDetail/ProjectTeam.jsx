import React from 'react';

const team = [
  { initials: 'AJ', name: 'Alex Johnson', role: 'Lead Designer', color: 'bg-indigo-100 text-indigo-700' },
  { initials: 'SW', name: 'Sarah Williams', role: 'Frontend Developer', color: 'bg-pink-100 text-pink-700' },
  { initials: 'DC', name: 'David Chen', role: 'UX Researcher', color: 'bg-amber-100 text-amber-700' },
];

export default function ProjectTeam() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Team</h3>
      <ul className="space-y-4">
        {team.map((member, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${member.color}`}>
              {member.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">{member.name}</p>
              <p className="text-xs text-slate-500">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
