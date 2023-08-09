import { App } from 'antd';
import 'antd/dist/reset.css';
import { WebStorageStateStore } from 'oidc-client-ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const oidcConfig: AuthProviderProps = {
  userStore: new WebStorageStateStore({
    store: localStorage,
  }),
  authority: import.meta.env.VITE_KEYCLOAK_REALM_URL,
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig} automaticSilentRenew>
      <App>
        <RouterProvider router={router} />
      </App>
    </AuthProvider>
  </React.StrictMode>,
);
