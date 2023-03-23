import { createBrowserRouter } from 'react-router-dom';
import { CandidateContainer } from './candidates';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CandidateContainer />,
  },
]);
