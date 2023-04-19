import { Card, Col, Row, Statistic } from 'antd';
import { useGetCandidatesQuery } from '../../redux/services/candidate';
import { useGetHiringManagersQuery } from '../../redux/services/hiring-manager';
import { useGetOpportunitiesQuery } from '../../redux/services/opportunity';

export const AppPage = () => {
  const { data: candidatesData, isLoading: candidatesIsLoading } = useGetCandidatesQuery();
  const { data: hiringManagersData, isLoading: hiringManagersIsLoading } = useGetHiringManagersQuery();
  const { data: opportunitiesData, isLoading: opportunitiesIsLoading } = useGetOpportunitiesQuery();

  return (
    <Row gutter={[8, 8]}>
      <Col span={8}>
        <Card bordered loading={candidatesIsLoading} size="small">
          <Statistic
            title="Candidates"
            value={
              candidatesData && candidatesData.meta && candidatesData.meta.itemCount ? candidatesData.meta.itemCount : 0
            }
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered loading={hiringManagersIsLoading} size="small">
          <Statistic
            title="Hiring Managers"
            value={
              hiringManagersData && hiringManagersData.meta && hiringManagersData.meta.itemCount
                ? hiringManagersData.meta.itemCount
                : 0
            }
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered loading={opportunitiesIsLoading} size="small">
          <Statistic
            title="Opportunities"
            value={
              opportunitiesData && opportunitiesData.meta && opportunitiesData.meta.itemCount
                ? opportunitiesData.meta.itemCount
                : 0
            }
          />
        </Card>
      </Col>
    </Row>
  );
};
