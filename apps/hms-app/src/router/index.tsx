import { AppstoreOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from '../components/guards/route.guard';
import { Layout } from '../components/layout';
import { AuthRoute } from '../routes/auth';
import { LoginPage } from '../routes/auth/login.page';
import { CompetitionRoute } from '../routes/competition';
import { CompetitionDetailPage } from '../routes/competition/competition-detail.page';
import { CompetitionListPage } from '../routes/competition/competition-list.page';
import { CreateCompetitionPage } from '../routes/competition/create-competition.page';
import { HomeRoute } from '../routes/home';
import { HomePage } from '../routes/home/home.page';
import { SettingsRoute } from '../routes/settings';
import { ClassificationPage } from '../routes/settings/classification.page';
import { JobDescriptionPage } from '../routes/settings/job-description.page';
import { LocationPage } from '../routes/settings/location.page';
import { MinistryPage } from '../routes/settings/ministry.page';
import { SettingsPage } from '../routes/settings/settings.page';

export const router = createBrowserRouter(
  [
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
              path: '/',
              element: <HomeRoute />,
              handle: {
                breadcrumb: () => 'Home',
                icon: <HomeOutlined />,
              },
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
              handle: {
                breadcrumb: () => 'Competitions',
                icon: <AppstoreOutlined />,
              },
              children: [
                {
                  index: true,
                  element: <CompetitionListPage />,
                },
                {
                  path: ':id',
                  element: <CompetitionDetailPage />,
                  loader: ({ params }) => {
                    return params;
                  },
                  handle: {
                    breadcrumb: (data: Record<string, any>) => {
                      return `Competition #${data.id}`;
                    },
                  },
                },
                {
                  path: 'create',
                  element: <CreateCompetitionPage />,
                  handle: {
                    breadcrumb: () => {
                      return 'Create Competition';
                    },
                  },
                },
              ],
            },
            {
              path: '/settings',
              element: <SettingsRoute />,
              handle: {
                breadcrumb: () => 'Settings',
                icon: <SettingOutlined />,
              },
              children: [
                {
                  index: true,
                  element: <SettingsPage />,
                },
                {
                  path: 'classifications',
                  element: <ClassificationPage />,
                  handle: {
                    breadcrumb: () => {
                      return 'Classifications';
                    },
                  },
                },
                {
                  path: 'job-descriptions',
                  element: <JobDescriptionPage />,
                  handle: {
                    breadcrumb: () => {
                      return 'Job Descriptions';
                    },
                  },
                },
                {
                  path: 'locations',
                  element: <LocationPage />,
                  handle: {
                    breadcrumb: () => {
                      return 'Locations';
                    },
                  },
                },
                {
                  path: 'ministries',
                  element: <MinistryPage />,
                  handle: {
                    breadcrumb: () => {
                      return 'Ministries';
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  { basename: '/app' },
);
