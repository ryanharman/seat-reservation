import { Breadcrumb, Card, Col, Divider, Row, Space, Statistic, Typography } from 'antd';
import { addHours, endOfToday, format, minutesToHours, startOfToday, subHours } from 'date-fns';
import React from 'react';

import { PageLayout } from '../../components';
import { Office } from '../../types';
import { ItemList } from './components/ItemList';
import { ManagerList } from './components/ManagerList';

const { Title, Text } = Typography;

const tempOfficeObj: Office = {
  id: 1,
  name: "Ryan's Office",
  seats: [
    {
      id: 1,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 3,
      type: 'Seat',
      availableForBooking: false,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 4,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
  ],
  officeManagers: [
    {
      id: 1,
      firstName: 'Ryan',
      lastName: 'Harman',
      reservations: [],
      role: 'Admin',
      createdAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Jesus',
      lastName: 'Christ',
      reservations: [],
      role: 'Admin',
      createdAt: new Date(),
    },
  ],
  activeTimes: {
    start: addHours(startOfToday(), 6),
    end: subHours(endOfToday(), 5),
  },
  bookingLength: 180,
  createdAt: new Date(),
};

const OfficePage = () => {
  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Offices</Breadcrumb.Item>
        <Breadcrumb.Item>Office Page</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Space direction="vertical" className="w-full">
          <div className="flex justify-between">
            <div className="flex flex-col justify-evenly">
              <Text strong className="text-2xl">
                {tempOfficeObj.name}
              </Text>
              <Text italic>Created at {format(tempOfficeObj.createdAt, 'dd/MM/yyyy')}</Text>
            </div>
            <div className="flex gap-4">
              <Statistic
                title="Active Hours"
                value={`${format(tempOfficeObj.activeTimes.start, 'HH:mm')} - ${format(
                  tempOfficeObj.activeTimes.end,
                  'HH:mm'
                )}`}
              />
              <Divider type="vertical" style={{ height: '100%' }} />
              <Statistic
                title="Booking Length"
                value={`${minutesToHours(tempOfficeObj.bookingLength)} hours`} // TODO: Create value check function to display minutes, hours etc
              />
            </div>
          </div>
        </Space>
      </Card>
      <Row gutter={24}>
        <Col span={12}>
          <Card>
            <Title level={3}>Management</Title>
            <Divider />
            <Space size="large" direction="vertical" className="w-full">
              <ManagerList managers={tempOfficeObj.officeManagers} />
              <ItemList seats={tempOfficeObj.seats} />
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Title level={3}>Reservations</Title>
            <Divider />
            Reservation list here...
          </Card>
        </Col>
      </Row>
      <Card>
        <Row>Floor plan customisation here?</Row>
      </Card>
    </PageLayout>
  );
};

export default OfficePage;
