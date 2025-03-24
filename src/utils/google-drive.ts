import { useGoogleLogin } from '@react-oauth/google';
import CryptoJS from 'crypto-js';
import { oauthConfig } from '../config/oauth';

const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || 'your-secure-key';

export interface DriveConfig {
  clientId: string;
  scope: string;
  redirectUri: string;
}

export const driveConfig: DriveConfig = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  scope: oauthConfig.scope,
  redirectUri: oauthConfig.redirectUri,
};

export const useGoogleDrive = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const accessToken = response.access_token;
      localStorage.setItem('googleAccessToken', accessToken);
      localStorage.setItem('tokenTimestamp', Date.now().toString());
      window.location.reload();
    },
    onError: (error) => {
      console.error('Erro na autenticação:', error);
      if (error.error === 'access_denied') {
        alert('O aplicativo está em fase de testes e precisa ser verificado no Google Cloud Console. Por favor, entre em contato com o desenvolvedor para ser adicionado como testador autorizado.');
      } else {
        alert('Erro ao conectar com o Google Drive. Por favor, tente novamente mais tarde.');
      }
    },
    scope: driveConfig.scope,
    flow: 'implicit',
    redirect_uri: driveConfig.redirectUri,
    prompt: oauthConfig.prompt,
    access_type: oauthConfig.accessType
  });

  const createFile = async (name: string, content: string): Promise<string> => {
    try {
      const accessToken = localStorage.getItem('googleAccessToken');
      if (!accessToken) {
        throw new Error('Usuário não autenticado no Google Drive');
      }

      const metadata = {
        name,
        mimeType: 'application/json',
        parents: ['appDataFolder'] // Salva na pasta de dados do aplicativo
      };

      const form = new FormData();
      form.append(
        'metadata',
        new Blob([JSON.stringify(metadata)], { type: 'application/json' })
      );
      form.append('file', new Blob([content], { type: 'application/json' }));

      const response = await fetch(
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: form,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro ao criar arquivo: ${errorData.error?.message || 'Erro desconhecido'}`);
      }

      const data = await response.json();
      return data.id;
    } catch (error) {
      console.error('Erro ao criar arquivo:', error);
      throw error;
    }
  };

  const encryptData = (data: { email: string; password: string }): string => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
  };

  const saveAccountData = async (account: {
    email: string;
    password: string;
  }): Promise<string> => {
    try {
      const encryptedData = encryptData(account);
      const fileName = `pinterest_account_${Date.now()}.json`;
      return await createFile(fileName, encryptedData);
    } catch (error) {
      console.error('Erro ao salvar dados da conta:', error);
      throw error;
    }
  };

  return {
    login,
    saveAccountData,
    isAuthenticated: !!localStorage.getItem('googleAccessToken'),
  };
};