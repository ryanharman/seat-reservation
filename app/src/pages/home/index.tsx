import React, { useState } from 'react';
import { Avatar, Breadcrumb, Card, Col, Divider, Row, Space, Statistic, Typography } from 'antd';
import { PageLayout, Calendar } from '../../components';
import { Reservation } from '../../types';
import { addDays } from 'date-fns';
import ItemSelection from './components/ItemSelection';
import UpcomingReservations from './components/UpcomingReservations';

const { Title, Text } = Typography;
const Home = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Space direction="vertical" className="w-full mb-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar size={64}>RH</Avatar>
              <div className="flex flex-col">
                <Text strong className="text-2xl">
                  Hello Ryan,
                </Text>
                <Text>This is your home page</Text>
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
        <UpcomingReservations reservations={reservations} />
      </Card>
      <Row gutter={24}>
        <Col span={16}>
          <Calendar onSelectedDateChange={setDate} reservations={reservations} />
        </Col>
        <Col span={8}>
          <ItemSelection date={date} />
        </Col>
      </Row>
    </PageLayout>
  );
};

const reservations: Reservation[] = [
  {
    id: 1,
    userId: 1,
    cancelled: false,
    bookedItemId: 1,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: true,
  },
  {
    id: 2,
    userId: 2,
    cancelled: true,
    bookedItemId: 1,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: true,
  },
  {
    id: 3,
    userId: 2,
    cancelled: true,
    bookedItemId: 3,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: true,
  },
  {
    id: 4,
    userId: 2,
    cancelled: true,
    bookedItemId: 3,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: false,
  },
  {
    id: 5,
    userId: 2,
    cancelled: true,
    bookedItemId: 3,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: true,
  },
  {
    id: 6,
    userId: 2,
    cancelled: false,
    bookedItemId: 3,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: false,
  },
];

export default Home;
