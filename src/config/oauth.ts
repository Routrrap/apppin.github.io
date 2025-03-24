// Configurações do OAuth do Google
export const oauthConfig = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  redirectUri: window.location.origin.replace('http:', 'https:'),
  scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
  responseType: 'code',
  accessType: 'offline',
  prompt: 'consent',
  include_granted_scopes: true,
  clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET
};