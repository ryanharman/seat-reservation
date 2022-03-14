import { Breadcrumb, Card, Col, Divider, Row, Space, Statistic, Typography } from 'antd';
import { format } from 'date-fns';
import React from 'react';

import { PageLayout } from '../../../components';

const { Title, Text } = Typography;

const tempUser = {
  id: 1,
  firstName: 'Ryan',
  lastName: 'Harman',
  role: 'Admin',
  createdAt: new Date(),
  updatedAt: undefined,
  reservations: [
    {
      id: 1,
      userId: 1,
      cancelled: false,
      officeId: 2,
      bookedItemId: 1,
      bookedItemType: 'Room',
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: new Date(),
      isAllDay: true,
    },
    {
      id: 2,
      userId: 1,
      cancelled: false,
      officeId: 2,
      bookedItemId: 3,
      bookedItemType: 'Seat',
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: new Date(),
      isAllDay: false,
    },
    {
      id: 3,
      userId: 1,
      cancelled: false,
      officeId: 2,
      bookedItemId: 3,
      bookedItemType: 'Seat',
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: new Date(),
      isAllDay: false,
    },
  ],
};

const UserPage = () => {
  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Users</Breadcrumb.Item>
        <Breadcrumb.Item>User Page</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Space direction="vertical" className="w-full">
          <div className="flex justify-between">
            <div className="flex flex-col justify-evenly">
              <Text strong className="text-2xl">
                {tempUser.firstName} {tempUser.lastName}
              </Text>
              <Text italic>Created on {format(tempUser.createdAt, 'dd/MM/yyyy')}</Text>
            </div>
            <div className="flex gap-4">
              <Statistic title="Role" value={tempUser.role} />
              {/* <Divider type="vertical" style={{ height: '100%' }} />
              <Statistic title="Total Reservations" value={tempUser.reservations.length} /> */}
            </div>
          </div>
        </Space>
      </Card>
      <Row gutter={24}>
        <Col span={12}>
          <Card>
            <Title level={3}>Reservations</Title>
            <Divider />
            Reservation list here...
          </Card>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default UserPage;
