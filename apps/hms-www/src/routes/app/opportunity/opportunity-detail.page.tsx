import { Col, Row, Typography } from 'antd';

export const OpportunityDetailPage = () => {
  const { Title } = Typography;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <form>
        <Row>
          <Col xs={24}>
            <Title>Opportunity Detail</Title>
          </Col>
        </Row>
      </form>
    </div>
  );
};
