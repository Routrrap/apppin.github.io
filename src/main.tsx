import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import './index.css';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!import.meta.env.VITE_GOOGLE_CLIENT_ID || !import.meta.env.VITE_ENCRYPTION_KEY) {
  throw new Error('As variáveis de ambiente VITE_GOOGLE_CLIENT_ID e VITE_ENCRYPTION_KEY são obrigatórias');
}

if (!clientId) {
  console.warn('VITE_GOOGLE_CLIENT_ID não está configurado no arquivo .env');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);