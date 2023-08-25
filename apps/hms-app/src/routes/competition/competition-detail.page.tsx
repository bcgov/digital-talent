import { useLoaderData } from 'react-router-dom';

export const CompetitionDetailPage = () => {
  const loaderData = useLoaderData() as Record<string, any>;

  return (
    <div style={{ margin: '1rem 2rem' }}>
      <h1>Competition #{loaderData.id}</h1>
    </div>
  );
};
