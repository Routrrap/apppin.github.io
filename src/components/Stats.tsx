import React from 'react';
import { Users, CheckCircle, XCircle, Clock } from 'lucide-react';
import type { Stats } from '../types';

interface StatsProps {
  stats: Stats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Accounts',
      value: stats.total,
      icon: Users,
      className: 'bg-gray-50',
      textColor: 'text-gray-900',
    },
    {
      label: 'Created',
      value: stats.created,
      icon: CheckCircle,
      className: 'bg-green-50',
      textColor: 'text-green-900',
    },
    {
      label: 'Failed',
      value: stats.failed,
      icon: XCircle,
      className: 'bg-red-50',
      textColor: 'text-red-900',
    },
    {
      label: 'Time Elapsed',
      value: `${Math.floor(stats.timeElapsed / 60)}m ${stats.timeElapsed % 60}s`,
      icon: Clock,
      className: 'bg-blue-50',
      textColor: 'text-blue-900',
    },
  ];

  return (
    <div className="card">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statItems.map((item) => (
          <div key={item.label} className={`${item.className} rounded-lg p-4`}>
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-current opacity-75" />
              <p className="text-sm">{item.label}</p>
            </div>
            <p className={`text-2xl font-semibold mt-2 ${item.textColor}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};