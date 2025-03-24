import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EmailInput } from './components/EmailInput';
import { ProxyInput } from './components/ProxyInput';
import { Controls } from './components/Controls';
import { AccountsTable } from './components/AccountsTable';
import { Stats } from './components/Stats';
import { GoogleDriveAuth } from './components/GoogleDriveAuth';
import type { Account, Stats as StatsType } from './types';
import { generatePassword } from './utils/validation';
import { useGoogleDrive } from './utils/google-drive';
import { createPinterestAccount } from './utils/pinterest';

function App() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [proxies, setProxies] = useState<string[]>([]);
  const [currentProxyIndex, setCurrentProxyIndex] = useState(0);
  const [delay, setDelay] = useState(5);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stats, setStats] = useState<StatsType>({
    total: 0,
    created: 0,
    failed: 0,
    timeElapsed: 0,
  });

  const { saveAccountData, isAuthenticated } = useGoogleDrive();

  useEffect(() => {
    let interval: number;
    if (isProcessing) {
      interval = setInterval(() => {
        setStats(prev => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

  const handleEmailsSubmit = (emails: string[]) => {
    const newAccounts = emails.map(email => ({
      email,
      password: generatePassword(),
      status: 'pending' as const,
    }));
    setAccounts(prev => [...prev, ...newAccounts]);
    setStats(prev => ({ ...prev, total: prev.total + newAccounts.length }));
  };

  const handleProxiesSubmit = (newProxies: string[]) => {
    setProxies(newProxies);
  };

  const processAccount = async (account: Account) => {
    try {
      const proxy = proxies.length > 0 ? proxies[currentProxyIndex] : undefined;
      
      setAccounts(prev =>
        prev.map(acc =>
          acc.email === account.email
            ? { ...acc, status: 'processing' }
            : acc
        )
      );

      await createPinterestAccount({
        email: account.email,
        password: account.password,
      }, proxy);

      if (!account.email || !account.password) {
        throw new Error('Email e senha são obrigatórios');
      }

      if (isAuthenticated) {
        await saveAccountData({
          email: account.email,
          password: account.password,
        });
      }

      setAccounts(prev =>
        prev.map(acc =>
          acc.email === account.email
            ? { ...acc, status: 'created', createdAt: new Date().toISOString() }
            : acc
        )
      );
      setStats(prev => ({ ...prev, created: prev.created + 1 }));

      if (proxies.length > 0) {
        setCurrentProxyIndex((prev) => (prev + 1) % proxies.length);
      }
    } catch (error) {
      setAccounts(prev =>
        prev.map(acc =>
          acc.email === account.email
            ? { ...acc, status: 'error', error: (error as Error).message }
            : acc
        )
      );
      setStats(prev => ({ ...prev, failed: prev.failed + 1 }));
    }
  };

  const handleStartAll = async () => {
    setIsProcessing(true);
    const pendingAccounts = accounts.filter(acc => acc.status === 'pending');

    for (const account of pendingAccounts) {
      if (!isProcessing) break;
      
      setAccounts(prev =>
        prev.map(acc =>
          acc.email === account.email
            ? { ...acc, status: 'processing' }
            : acc
        )
      );

      await processAccount(account);
      await new Promise(resolve => setTimeout(resolve, delay * 1000));
    }

    setIsProcessing(false);
  };

  const handlePauseAll = () => {
    setIsProcessing(false);
  };

  const handlePause = (email: string) => {
    setAccounts(prev =>
      prev.map(account =>
        account.email === email
          ? { ...account, status: 'pending' }
          : account
      )
    );
  };

  const handleResume = async (email: string) => {
    const account = accounts.find(acc => acc.email === email);
    if (!account) return;

    setAccounts(prev =>
      prev.map(acc =>
        acc.email === email
          ? { ...acc, status: 'processing' }
          : acc
      )
    );

    await processAccount(account);
  };

  const handleDelete = (email: string) => {
    setAccounts(prev => prev.filter(account => account.email !== email));
    setStats(prev => ({ ...prev, total: prev.total - 1 }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <GoogleDriveAuth />
          <EmailInput onEmailsSubmit={handleEmailsSubmit} />
          <ProxyInput onProxiesSubmit={handleProxiesSubmit} />
          <Controls
            delay={delay}
            onDelayChange={setDelay}
            onStartAll={handleStartAll}
            onPauseAll={handlePauseAll}
            isProcessing={isProcessing}
          />
          <Stats stats={stats} />
          <AccountsTable
            accounts={accounts}
            onPause={handlePause}
            onResume={handleResume}
            onDelete={handleDelete}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;