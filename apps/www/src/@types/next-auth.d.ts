import { DefaultSession } from 'next-auth';
import { KeycloakProfile } from 'next-auth/providers/keycloak';

declare module 'next-auth' {
  /** The OAuth profile returned from your provider */
  interface Profile extends KeycloakProfile {
    client_roles: string[];
    idir_user_guid: string;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      roles: string[];
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
    roles: string[];
  }
}
