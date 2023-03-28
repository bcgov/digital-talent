/* eslint-disable no-console */
import { Typography } from 'antd';
import { isUUID } from 'class-validator';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyGetCandidateQuery } from '../../../redux/services/candidate';

export const CandidateDetailPage = () => {
  const { Title } = Typography;
  const params = useParams();
  const [error, setError] = useState<number | undefined>(undefined);
  const [trigger, result] = useLazyGetCandidateQuery();

  useEffect(() => {
    if (params.id) {
      if (isUUID(params.id, 4)) {
        trigger(params.id);
      } else {
        setError(404);
      }
    }
  }, [trigger, params]);

  return (
    <div>
      <Title>Candidate Detail</Title>
      {error ? <div>error</div> : <div>{JSON.stringify(result)}</div>}
    </div>
  );
};
