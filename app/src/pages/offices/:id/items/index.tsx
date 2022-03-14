import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftOutlined } from '@ant-design/icons';

import { OfficePageContainer } from '../components/OfficePageContainer';

const { Text } = Typography;

const BookableItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const officeId = pathname.split('/')[2];

  return (
    <OfficePageContainer>
      <Text
        onClick={() => navigate(`/offices/${officeId}`)}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <LeftOutlined className="transition-all group-hover:text-blue-500" />
        Go back
      </Text>
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
