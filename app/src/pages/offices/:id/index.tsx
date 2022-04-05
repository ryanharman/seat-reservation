import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';
import React from 'react';
import { useMatch } from 'react-router-dom';

import { useOfficeGet } from '../../../api';
import { useBookableItemGet } from '../../../api/useBookableItem';
import { useOfficeManagerGet } from '../../../api/useOfficeManager';
import { useReservationGet } from '../../../api/useReservation';
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
      label: '1',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      type: 'Room',
      label: '1',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      type: 'Seat',
      label: '3',
      availableForBooking: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      type: 'Seat',
      label: '4',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: new Date(),
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
export const useOffice = () => {
  return { office: tempOfficeObj };
};

const OfficePage = () => {
  const match = useMatch('offices/:id');
  const officeId = match?.pathname.split('/')[2];
  const { data: office } = useOfficeGet({ id: officeId });
  const enabled = !!office;
  const { data: reservations } = useReservationGet({ officeId }, { enabled });
  const { data: items } = useBookableItemGet({ officeId }, { enabled });
  const { data: managers } = useOfficeManagerGet({ officeId }, { enabled });

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
