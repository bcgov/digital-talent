import NextAuth, { AuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { guidToUuid } from '../../../common/utils/guid-to-uuid.util';

export const options: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    signIn({ profile, user }) {
      if (profile) {
        // Restrict access to admin, dtad-team roles
        const allowed_roles = ['admin', 'dtad-team'];
        return (profile.client_roles ?? []).some((r) => allowed_roles.includes(r));
      }

      return false;
    },
    jwt({ token, profile }) {
      // Map id, roles to token
      const extendedToken = token;
      if (profile) {
        extendedToken.id = guidToUuid(profile.idir_user_guid);
        extendedToken.roles = profile.client_roles;
      }

      return extendedToken;
    },
    session({ session, token }) {
      // Map id, roles to session
      const extendedSession = session;
      if (token) {
        extendedSession.user.id = token.id;
        extendedSession.user.roles = token.roles;
      }

      return extendedSession;
    },
  },
};

export default NextAuth(options);
