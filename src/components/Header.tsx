import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Pinterest Account Creator</h1>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="/privacy" className="hover:text-gray-900">Política de Privacidade</a>
          <a href="/terms" className="hover:text-gray-900">Termos de Serviço</a>
        </div>
      </div>
    </header>
  );
};