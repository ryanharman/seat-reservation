import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';

import { OfficePageContainer } from '../components/OfficePageContainer';

const { Title } = Typography;

const BookableItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const officeId = pathname.split('/')[2];

  return (
    <OfficePageContainer>
      <Title
        level={5}
        onClick={() => navigate(`/offices/${officeId}`)}
        className="flex items-center gap-2 cursor-pointer group px-6 pt-2"
      >
        <ArrowLeftOutlined className="transition-all group-hover:text-blue-500" />
        Return to Office Information
      </Title>
      <Row gutter={24}>
        <Col span={12}>
          <Card>
            <div>test</div>
          </Card>
        </Col>
      </Row>
    </OfficePageContainer>
  );
};

export default BookableItems;
