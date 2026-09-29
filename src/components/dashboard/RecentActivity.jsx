import React from 'react';
import { CheckCircle2, ThumbsUp, Send, UserPlus } from 'lucide-react';

const activities = [
  { id: 1, type: 'task', icon: CheckCircle2, iconColor: 'text-green-600 bg-green-50', content: <><span className="font-semibold text-slate-900">Alex Johnson</span> completed task <span className="font-semibold text-slate-900">Homepage responsive layout</span>.</>, time: '2 minutes ago' },
  { id: 2, type: 'approval', icon: ThumbsUp, iconColor: 'text-blue-600 bg-blue-50', content: <><span className="font-semibold text-slate-900">Nova Health</span> approved the mobile app wireframes.</>, time: '1 hour ago' },
  { id: 3, type: 'invoice', icon: Send, iconColor: 'text-indigo-600 bg-indigo-50', content: <>Invoice <span className="font-semibold text-slate-900">#FD-1048</span> was sent to <span className="font-semibold text-slate-900">Kora Interiors</span>.</>, time: 'Yesterday' },
  { id: 4, type: 'client', icon: UserPlus, iconColor: 'text-indigo-600 bg-indigo-50', content: <>New client added: <span className="font-semibold text-slate-900">Maison Studio</span>.</>, time: '2 days ago' },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
      </div>
      <div className="p-6">
        <div className="relative border-l-2 border-slate-100 ml-4 space-y-8">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative pl-6">
              <span className={`absolute -left-[19px] top-1 p-1.5 rounded-full ring-4 ring-white ${activity.iconColor}`}>
                <activity.icon className="w-4 h-4" />
              </span>
              <p className="text-sm text-slate-600">{activity.content}</p>
              <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
