import { App, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { WebStorageStateStore } from 'oidc-client-ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/redux.store';
import { router } from './router';

export const oidcConfig: AuthProviderProps = {
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
      <ReduxProvider store={store}>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                colorBgHeader: '#FFF',
              },
            },
          }}
        >
          <App>
            <RouterProvider router={router} />
          </App>
        </ConfigProvider>
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>,
);
