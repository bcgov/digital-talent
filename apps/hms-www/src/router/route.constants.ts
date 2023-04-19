export const Routes = {
  App: {
    ROOT: '/',
    Candidate: {
      ROOT: '/candidates',
      CREATE: '/candidates/new',
      DETAIL: (id?: string) => `/candidates/${id ?? ':id'}`,
    },
    HiringManager: {
      ROOT: '/hiring-managers',
      CREATE: '/hiring-managers/new',
      DETAIL: (id?: string) => `/hiring-managers/${id ?? ':id'}`,
    },
    Opportunity: {
      ROOT: '/opportunities',
      CREATE: '/opportunities/new',
      DETAIL: (id?: string) => `/opportunities/${id ?? ':id'}`,
    },
  },
  Auth: {
    ROOT: '/auth',
    LOGIN: '/auth/login',
  },
};
