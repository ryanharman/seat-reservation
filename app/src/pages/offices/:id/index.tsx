import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import React from 'react';
import { useMatch } from 'react-router-dom';

import { useOfficePageData } from '../../../hooks/useOfficePageData';
import { ItemList } from './components/ItemList';
import { ManagerList } from './components/ManagerList';
import { OfficePageContainer } from './components/OfficePageContainer';
import { ReservationList } from './components/ReservationList';

const { Title } = Typography;

const OfficePage = () => {
  const match = useMatch('offices/:id');
  const officeId = match?.pathname.split('/')[2];
  const { items, managers, office, reservations } = useOfficePageData(officeId);

  return (
    <OfficePageContainer office={office}>
      <Row gutter={24}>
        <Col span={10}>
          <Card>
            <Title level={3}>Management</Title>
            <Divider />
            <Space size="middle" direction="vertical" className="w-full">
              <ManagerList managers={managers} />
              <ItemList bookableItems={items} />
              <ReservationList reservations={reservations} />
            </Space>
          </Card>
        </Col>
        <Col span={14}>
          <Card>
            <Row>Floor plan customisation here?</Row>
          </Card>
        </Col>
      </Row>
    </OfficePageContainer>
  );
};

export default OfficePage;
