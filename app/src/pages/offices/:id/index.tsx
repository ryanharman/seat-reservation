import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';
import React from 'react';

import { testDate } from '../../../store';
import { Office } from '../../../types';
import { ItemList } from './components/ItemList';
import { ManagerList } from './components/ManagerList';
import { OfficePageContainer } from './components/OfficePageContainer';
import { ReservationList } from './components/ReservationList';

const { Title } = Typography;

export const tempOfficeObj: Office = {
  id: 1,
  name: "Ryan's Office",
  bookableItems: [
    {
      id: 1,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      type: 'Room',
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
      dateBookedFrom: testDate,
      dateBookedTo: addHours(testDate, 2),
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
      dateBookedFrom: addHours(testDate, 2),
      dateBookedTo: addHours(testDate, 6),
      isAllDay: false,
    },
  ],
  createdAt: new Date(),
};

// Temp hook to replicate react query API call
const useOffice = () => {
  return { office: tempOfficeObj };
};

const OfficePage = () => {
  const { office } = useOffice();

  return (
    <OfficePageContainer>
      <Row gutter={24}>
        <Col span={10}>
          <Card>
            <Title level={3}>Management</Title>
            <Divider />
            <Space size="large" direction="vertical" className="w-full">
              <ManagerList managers={office.officeManagers} />
              <ItemList bookableItems={office.bookableItems} />
              <ReservationList reservations={office.reservations} />
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
