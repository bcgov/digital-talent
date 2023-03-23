import { createBrowserRouter } from 'react-router-dom';
import { RouteGuard } from './components/guards/route.guard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteGuard />,
  },
]);
