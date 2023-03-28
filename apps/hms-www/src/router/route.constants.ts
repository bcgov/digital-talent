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
    },
  },
  Auth: {
    ROOT: '/auth',
    LOGIN: '/auth/login',
  },
};
