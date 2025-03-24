import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 text-sm text-gray-600">
          <Link to="/privacy" className="hover:text-gray-900">Política de Privacidade</Link>
          <Link to="/terms" className="hover:text-gray-900">Termos de Serviço</Link>
        </div>
      </div>
    </footer>
  );
};