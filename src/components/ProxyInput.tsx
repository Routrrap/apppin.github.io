import React, { useState } from 'react';
import { validateProxy } from '../utils/pinterest';

interface ProxyInputProps {
  onProxiesSubmit: (proxies: string[]) => void;
}

export const ProxyInput: React.FC<ProxyInputProps> = ({ onProxiesSubmit }) => {
  const [proxies, setProxies] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const proxyList = proxies.split('\n').map(proxy => proxy.trim()).filter(Boolean);
    const invalidProxies = proxyList.filter(proxy => !validateProxy(proxy));

    if (invalidProxies.length > 0) {
      setError(`Invalid proxies found: ${invalidProxies.join(', ')}`);
      return;
    }

    setError('');
    onProxiesSubmit(proxyList);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Proxies (IP:Port, one per line)
          </label>
          <textarea
            className="input-base min-h-[120px] sm:min-h-[160px]"
            value={proxies}
            onChange={(e) => setProxies(e.target.value)}
            placeholder="127.0.0.1:8080"
          />
        </div>

        <button type="submit" className="btn-primary w-full sm:w-auto">
          Add Proxies
        </button>

        {error && (
          <p className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-lg">{error}</p>
        )}
      </form>
    </div>
  );
};