import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import App from './App';
import './index.css';

const oidcConfig = {
  authority: import.meta.env.VITE_KEYCLOAK_REALM_URL,
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig} automaticSilentRenew>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
