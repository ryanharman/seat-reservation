import { Avatar, Breadcrumb, Card, Col, Divider, Row, Space, Statistic, Typography } from 'antd';
import React from 'react';

import { Calendar, PageLayout } from '../../components';
import { useAppSelector } from '../../store';
import { getUser } from '../../store/selectors/user';
import ItemSelection from './components/ItemSelection';
import UpcomingReservations from './components/UpcomingReservations';

const { Title, Text } = Typography;

const Home = () => {
  const user = useAppSelector(getUser);

  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Space direction="vertical" className="w-full mb-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar size={64}>
                {user.firstName.split('')[0]}
                {user.lastName.split('')[0]}
              </Avatar>
              <div className="flex flex-col">
                <Text strong className="text-2xl">
                  Welcome back {user.firstName}
                </Text>
                {/* <Text>This is your home page</Text> */}
              </div>
            </div>
            <div className="flex gap-4">
              <Statistic title="Active Users" value={112} />
              <Divider type="vertical" className="h-full" />
              <Statistic title="Reservations Made" value={12} />
              <Divider type="vertical" className="h-full" />
              <Statistic title="Reservations Cancelled" value={24} />
            </div>
          </div>
        </Space>
        <Title level={3}>Upcoming Reservations</Title>
        <UpcomingReservations />
      </Card>
      <Row gutter={24}>
        <Col span={16}>
          <Calendar />
        </Col>
        <Col span={8}>
          <ItemSelection />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Home;
