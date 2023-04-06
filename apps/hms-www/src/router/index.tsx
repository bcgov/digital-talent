import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from '../components/guards/route.guard';
import { AppRoute } from '../routes/app';
import { AppPage } from '../routes/app/app.page';
import { CandidateRoute } from '../routes/app/candidate';
import { CandidateDetailPage } from '../routes/app/candidate/candidate-detail.page';
import { CandidateListPage } from '../routes/app/candidate/candidate-list.page';
import { HiringManagerRoute } from '../routes/app/hiring-manager';
import { HiringManagerDetailPage } from '../routes/app/hiring-manager/hiring-manager-detail.page';
import { HiringManagerListPage } from '../routes/app/hiring-manager/hiring-manager-list.page';
import { OpportunityRoute } from '../routes/app/opportunity';
import { OpportunityDetailPage } from '../routes/app/opportunity/opportunity-detail.page';
import { OpportunityListPage } from '../routes/app/opportunity/opportunity-list.page';
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
          {
            path: Routes.App.Candidate.ROOT,
            element: <CandidateRoute />,
            children: [
              {
                path: Routes.App.Candidate.ROOT,
                element: <CandidateListPage />,
              },
              {
                path: Routes.App.Candidate.CREATE,
                element: <CandidateDetailPage />,
              },
              {
                path: Routes.App.Candidate.DETAIL(),
                element: <CandidateDetailPage />,
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
              {
                path: Routes.App.HiringManager.CREATE,
                element: <HiringManagerDetailPage />,
              },
              {
                path: Routes.App.HiringManager.DETAIL(),
                element: <HiringManagerDetailPage />,
              },
            ],
          },
          {
            path: Routes.App.Opportunity.ROOT,
            element: <OpportunityRoute />,
            children: [
              {
                path: Routes.App.Opportunity.ROOT,
                element: <OpportunityListPage />,
              },
              {
                path: Routes.App.Opportunity.CREATE,
                element: <OpportunityDetailPage />,
              },
              {
                path: Routes.App.Opportunity.DETAIL(),
                element: <OpportunityDetailPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
