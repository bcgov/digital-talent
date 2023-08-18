import { gql, useMutation } from '@apollo/client';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const CREATE_COMPETITION_MUTATION = gql`
  mutation CreateCompetition($data: CreateCompetitionInput!) {
    createCompetition(data: $data)
  }
`;

const CreateCompetition = () => {
  const navigate = useNavigate();
  const [createCompetition] = useMutation(CREATE_COMPETITION_MUTATION, {
    onCompleted: (data) => {
      // Navigate to /competitions upon successful creation
      navigate('/competitions', { state: { refetch: true } });
      message.success('Competition created successfully!');
    },
    onError: (error) => {
      // Display an error message if the mutation fails
      message.error(`Failed to create competition: ${error.message}`);
    },
  });

  const onFinish = async (values: any) => {
    await createCompetition({ variables: { data: values } });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create New Competition</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="ID" name="id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Classification ID" name="classification_id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="category" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Deltek ID" name="deltek_id" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Recruiter ID" name="recruiter_id" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCompetition;
