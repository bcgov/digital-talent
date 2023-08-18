import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { App } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import userManager from './user-manager';

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const { access_token } = JSON.parse(
    localStorage.getItem(
      `oidc.user:${import.meta.env.VITE_KEYCLOAK_REALM_URL}:${import.meta.env.VITE_KEYCLOAK_CLIENT_ID}`,
    ) ?? '{}',
  );

  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider automaticSilentRenew userManager={userManager}>
      <App>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </App>
    </AuthProvider>
  </React.StrictMode>,
);

export default userManager;
