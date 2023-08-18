import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from '../components/guards/route.guard';
import { AppRoute } from '../routes/app';
import { AppPage } from '../routes/app/app.page';
import { AuthRoute } from '../routes/auth';
import { LoginPage } from '../routes/auth/login.page';
import { Routes } from './route.constants';
import CompetitionList from '../routes/competition/competition-list';
import CompetitionDetails from '../routes/competition/competition-details';
import CreateCompetition from '../routes/competition/create-competition';
import { CallbackPage } from '../routes/auth/callback.page';
import Layout from '../layout';

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
  {
    path: Routes.Auth.CALLBACK,
    element: <CallbackPage />,
  },
  {
    path: Routes.Public.CREATE_COMPETITION,
    element: <Layout />,
    children: [
      {
        path: Routes.Public.CREATE_COMPETITION,
        element: <CreateCompetition />,
      },
    ],
  },
  {
    path: Routes.Public.VIEW_COMPETITIONS,
    element: <Layout />,
    children: [
      {
        path: Routes.Public.VIEW_COMPETITIONS,
        element: <CompetitionList />,
      },
    ],
  },
  {
    path: Routes.Public.COMPETITIN_DETAILS,
    element: <Layout />,
    children: [
      {
        path: Routes.Public.COMPETITIN_DETAILS,
        element: <CompetitionDetails />,
      },
    ],
  },
]);
