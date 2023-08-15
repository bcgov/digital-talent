import { useAuth } from 'react-oidc-context';
import { Navigate, Outlet } from 'react-router-dom';
import { Routes } from '../../router/route.constants';

export const AuthRoute = () => {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate replace to={Routes.App.ROOT} />;
  }

  return <Outlet />;
};
