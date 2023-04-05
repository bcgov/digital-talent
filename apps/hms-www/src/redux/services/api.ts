import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const user = localStorage.getItem(
      `oidc.user:${import.meta.env.VITE_KEYCLOAK_REALM_URL}:${import.meta.env.VITE_KEYCLOAK_CLIENT_ID}`,
    );
    if (user) {
      const { access_token } = JSON.parse(user);
      if (access_token) headers.set('Authorization', `Bearer ${access_token}`);
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Candidates', 'Hiring Managers'],

  // Endpoints are injected from adjacent files
  endpoints: () => ({}),
});
