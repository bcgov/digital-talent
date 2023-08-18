import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User } from 'oidc-client-ts';
import userManager from '../../user-manager';

export const CallbackPage = () => {
  const hasRun = useRef(false); // This ref will track if our useEffect has already run
  const navigate = useNavigate();

  useEffect(() => {
    // If our side effect has already run, just return and do nothing
    // without this, this function runs twice because of <React.StrictMode> in dev mode
    if (hasRun.current) return;

    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      const fetchToken = async () => {
        const response = await axios.post('http://localhost:4000/auth/verify', { code });

        const user = new User({
          id_token: response.data.user.id as string, // todo: what should the id_token be?
          access_token: response.data.accessToken as string,
          token_type: 'jwt', // todo?
          profile: {
            // todo
            sub: '1234567890', // Subject - Identifier for the End-User
            iss: 'http://localhost:4000', // Issuer - who issued the token
            aud: 'my_client_id', // Audience - intended audience for the token
            exp: Math.floor(Date.now() / 1000) + 60 * 1, // Expiration time in UNIX timestamp (e.g., 1 minute from now)
            iat: Math.floor(Date.now() / 1000), // Issued at time in UNIX timestamp (current time)
          },
        });

        await userManager.storeUser(user).then(function () {
          navigate('/competitions');
        });
      };

      fetchToken();
      hasRun.current = true; // Mark the side effect as having run
    }
  }, [navigate]);

  return <div>Processing authentication...</div>;
};
