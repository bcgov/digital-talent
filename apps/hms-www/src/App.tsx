/* eslint-disable no-console */
import { useAuth } from 'react-oidc-context';

import './App.css';

function App() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello {auth.user?.profile.sub}
        <button onClick={() => auth.removeUser()} type="button">
          Log out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => auth.signinRedirect()} type="button">
      Log in
    </button>
  );
}

export default App;
