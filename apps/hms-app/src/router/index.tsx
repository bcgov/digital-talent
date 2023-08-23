import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from '../components/guards/route.guard';
import { Layout } from '../components/layout';
import { AuthRoute } from '../routes/auth';
import { LoginPage } from '../routes/auth/login.page';
import { CompetitionRoute } from '../routes/competition';
import { CompetitionListPage } from '../routes/competition/competition-list.page';
import { HomeRoute } from '../routes/home';
import { HomePage } from '../routes/home/home.page';
import { SettingsRoute } from '../routes/settings';
import { SettingsPage } from '../routes/settings/settings.page';

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthRoute />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <RouteGuard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <HomeRoute />,
            children: [
              {
                index: true,
                element: <HomePage />,
              },
            ],
          },
          {
            path: '/competitions',
            element: <CompetitionRoute />,
            children: [
              {
                index: true,
                element: <CompetitionListPage />,
              },
            ],
          },
          {
            path: '/settings',
            element: <SettingsRoute />,
            children: [
              {
                index: true,
                element: <SettingsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
