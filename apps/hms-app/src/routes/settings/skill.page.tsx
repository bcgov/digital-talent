import { Space, Table } from 'antd';
import dayjs from 'dayjs';
import { SkillCategory } from '../../redux/services/graphql-api/skills/skill.interfaces';
import { useGetSkillsQuery } from '../../redux/services/graphql-api/skills/skills-api.service';

export const SkillPage = () => {
  const { data, isLoading } = useGetSkillsQuery();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (value: string) => {
        switch (value) {
          case SkillCategory.CLOUD_PLATFORMS:
            return 'Cloud Platforms';
          case SkillCategory.COMMUNICATION:
            return 'Communication';
          case SkillCategory.CONTAINER_PLATFORMS:
            return 'Container Platforms';
          case SkillCategory.DATABASES:
            return 'Databases';
          case SkillCategory.DEVELOPMENT_TOOLS:
            return 'Development Tools';
          case SkillCategory.FRAMEWORKS_AND_LIBRARIES:
            return 'Frameworks and Libraries';
          case SkillCategory.KNOWLEDGE:
            return 'Knowledge';
          case SkillCategory.OPERATING_SYSTEMS:
            return 'Operating Systems';
          case SkillCategory.PRODUCTIVITY:
            return 'Productivity';
          case SkillCategory.PROGRAMMING_LANGUAGES:
            return 'Programming Languages';
          default:
            return value;
        }
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM d, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM d, YYYY') : ''}
          </span>
        );
      },
    },
    {
      title: 'Updated Date',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (value?: string) => {
        return (
          <span title={value != null ? dayjs(value).format('MMM d, YYYY @ h:mm:ss.SSS A') : ''}>
            {value != null ? dayjs(value).format('MMM d, YYYY') : ''}
          </span>
        );
      },
    },
  ];

  return (
    <div style={{ margin: '1rem 2rem' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <h1 style={{ marginBottom: 0 }}>Skills</h1>
        <Table
          columns={columns}
          dataSource={data?.skills}
          loading={isLoading}
          rowKey="id"
          style={{ border: '1px solid #CCC' }}
        />
      </Space>
    </div>
  );
};
