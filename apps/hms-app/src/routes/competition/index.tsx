import { Outlet } from 'react-router-dom';

export const CompetitionRoute = () => {
  return (
    <div style={{ margin: '1rem 2rem' }}>
      <Outlet />
    </div>
  );
};
