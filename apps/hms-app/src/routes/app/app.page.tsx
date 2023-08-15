import { gql, useQuery } from '@apollo/client';

const USERS_QUERY = gql`
  query Users {
    users
  }
`;

export const AppPage = () => {
  const { data, loading, error } = useQuery(USERS_QUERY);

  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;

  return <div>Message: {data.users}</div>;
};
