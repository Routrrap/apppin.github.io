import React from 'react';
import { LogIn } from 'lucide-react';
import { useGoogleDrive } from '../utils/google-drive';

export const GoogleDriveAuth: React.FC = () => {
  const { login, isAuthenticated } = useGoogleDrive();

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Google Drive</h2>
          <p className="text-sm text-gray-500 mt-1">
            {isAuthenticated
              ? 'Conectado ao Google Drive'
              : 'Conecte-se para salvar as contas automaticamente'}
          </p>
        </div>
        {!isAuthenticated && (
          <button
            onClick={() => login()}
            className="btn-primary flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Conectar</span>
          </button>
        )}
      </div>
    </div>
  );
};