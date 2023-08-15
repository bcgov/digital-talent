import { useAuth } from 'react-oidc-context';
import { Navigate, Outlet } from 'react-router-dom';
import { Routes } from '../../router/route.constants';

export const RouteGuard = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated && !auth.isLoading) {
    return <Navigate replace to={Routes.Auth.LOGIN} />;
  }

  return <Outlet />;
};
