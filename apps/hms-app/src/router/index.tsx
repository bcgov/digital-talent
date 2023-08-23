import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from '../components/guards/route.guard';
import { AppRoute } from '../routes/app';
import { AppPage } from '../routes/app/app.page';
import { AuthRoute } from '../routes/auth';
import { LoginPage } from '../routes/auth/login.page';
import { Routes } from './route.constants';

export const router = createBrowserRouter([
  {
    path: Routes.Auth.ROOT,
    element: <AuthRoute />,
    children: [
      {
        path: Routes.Auth.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: Routes.App.ROOT,
    element: <RouteGuard />,
    children: [
      {
        path: Routes.App.ROOT,
        element: <AppRoute />,
        children: [
          {
            path: Routes.App.ROOT,
            element: <AppPage />,
          },
        ],
      },
    ],
  },
]);
