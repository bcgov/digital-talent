import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from '../components/guards/route.guard';
import { AppRoute } from '../routes/app';
import { CandidateRoute } from '../routes/app/candidate';
import { CandidateListPage } from '../routes/app/candidate/candidate-list.page';
import { HiringManagerRoute } from '../routes/app/hiring-manager';
import { HiringManagerListPage } from '../routes/app/hiring-manager/hiring-manager-list.page';
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
            path: Routes.App.Candidate.ROOT,
            element: <CandidateRoute />,
            children: [
              {
                path: Routes.App.Candidate.ROOT,
                element: <CandidateListPage />,
              },
            ],
          },
          {
            path: Routes.App.HiringManager.ROOT,
            element: <HiringManagerRoute />,
            children: [
              {
                path: Routes.App.HiringManager.ROOT,
                element: <HiringManagerListPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
