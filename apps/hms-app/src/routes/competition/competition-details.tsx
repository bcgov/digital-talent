import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Card } from 'antd';

const FETCH_USER_DETAILS = gql`
  query Competition($id: String!) {
    competition(id: $id) {
      id
      classification_id
      recruiter_id
      category
      state
      deltek_id
    }
  }
`;

const CompetitionDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(FETCH_USER_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card title="Competition Details">
      <p>
        <strong>id:</strong> {data.competition.id}
      </p>
      <p>
        <strong>classification_id:</strong> {data.competition.classification_id}
      </p>
      <p>
        <strong>recruiter_id:</strong> {data.competition.recruiter_id}
      </p>
      <p>
        <strong>category:</strong> {data.competition.category}
      </p>
      <p>
        <strong>state:</strong> {data.competition.state}
      </p>
      <p>
        <strong>deltek_id:</strong> {data.competition.deltek_id}
      </p>
    </Card>
  );
};

export default CompetitionDetails;
