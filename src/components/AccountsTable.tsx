import React from 'react';
import { Play, Pause, Trash2, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import type { Account } from '../types';

interface AccountsTableProps {
  accounts: Account[];
  onPause: (email: string) => void;
  onResume: (email: string) => void;
  onDelete: (email: string) => void;
}

export const AccountsTable: React.FC<AccountsTableProps> = ({
  accounts,
  onPause,
  onResume,
  onDelete,
}) => {
  const getStatusIcon = (status: Account['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-gray-500" />;
      case 'processing':
        return <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />;
      case 'created':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="card overflow-x-auto">
      <div className="min-w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Created At
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {accounts.map((account) => (
              <tr key={account.email} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 truncate max-w-[200px]">
                  {account.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(account.status)}
                    <span className="capitalize">{account.status}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 hidden sm:table-cell">
                  {account.createdAt || '-'}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    {account.status === 'processing' ? (
                      <button
                        onClick={() => onPause(account.email)}
                        className="p-1 text-yellow-600 hover:text-yellow-900 transition-colors"
                        title="Pause"
                      >
                        <Pause className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => onResume(account.email)}
                        className="p-1 text-green-600 hover:text-green-900 transition-colors"
                        disabled={account.status === 'created'}
                        title="Resume"
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => onDelete(account.email)}
                      className="p-1 text-red-600 hover:text-red-900 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};