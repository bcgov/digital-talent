import { gql, useQuery, useMutation } from '@apollo/client';
import { Button, Table } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FETCH_ITEMS_QUERY = gql`
  query Competitions {
    competitions {
      id
      classification_id
      recruiter_id
      category
      state
      deltek_id
    }
  }
`;

const DELETE_COMPETITION_MUTATION = gql`
  mutation DeleteCompetition($data: DeleteCompetitionInput!) {
    deleteCompetition(data: $data)
  }
`;

const CompetitionList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [deleteCompetition] = useMutation(DELETE_COMPETITION_MUTATION, {
    onCompleted: () => {
      // Trigger a refetch of competitions after deleting
      refetch();
    },
  });

  const { data, loading, error, refetch } = useQuery(FETCH_ITEMS_QUERY);

  useEffect(() => {
    if (location.state?.refetch) {
      refetch();
    }
  }, [location, refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'classification_id',
      dataIndex: 'classification_id',
      key: 'classification_id',
    },
    {
      title: 'recruiter_id',
      dataIndex: 'recruiter_id',
      key: 'recruiter_id',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'state',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'deltek_id',
      dataIndex: 'deltek_id',
      key: 'deltek_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <span>
          <Button
            danger
            type="primary"
            onClick={(e) => {
              e.stopPropagation(); // Stop the event propagation here
              handleDelete(record.id);
            }}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const onRowClick = (record: any) => {
    navigate(`/competition/${record.id}`);
  };

  const handleDelete = (id: string) => {
    deleteCompetition({ variables: { data: { id } } });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Competitions</h2>
      <Button onClick={() => navigate('/create-competition')} style={{ marginBottom: '1rem' }} type="primary">
        Create New Competition
      </Button>
      <Table
        columns={columns}
        dataSource={data.competitions}
        rowKey="id"
        onRow={(record) => {
          return {
            onClick: () => onRowClick(record),
          };
        }}
      />
    </div>
  );
};

export default CompetitionList;
