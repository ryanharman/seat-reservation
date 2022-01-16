import { Avatar, Breadcrumb, Card, Col, Divider, Row, Space, Statistic, Typography } from 'antd';
import { addDays, isSameDay } from 'date-fns';
import React, { useState } from 'react';

import { Calendar, PageLayout } from '../../components';
import { useAppSelector } from '../../store';
import { getCalendar } from '../../store/selectors/calendar';
import { Reservation, Seat } from '../../types';
import ItemSelection from './components/ItemSelection';
import UpcomingReservations from './components/UpcomingReservations';

const { Title, Text } = Typography;
const Home = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [office, setOffice] = useState({ id: 1, name: 'C1 Lower' }); // TODO: To come from user context

  // TODO: Info to come from the API
  const reservationsForSelectedDate = reservations.filter((r) => isSameDay(r.dateBookedFrom, date));
  const userBookingForSelectedDate = reservationsForSelectedDate.find((r) => r.userId === 1);
  const seatsAvailable = () => {
    const seatsAvail = seats.filter((s) => {
      const foundSeat = reservationsForSelectedDate.find(
        (r) => r.bookedItemId === s.id && r.officeId === office.id
      );
      if (foundSeat || !s.availableForBooking) return false;
      return s.office.id === office.id;
    });
    return seatsAvail;
  };

  const calendarRedux = useAppSelector(getCalendar);
  console.log({ calendarRedux });

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
          <ItemSelection
            date={date}
            seats={seatsAvailable()}
            userBooking={userBookingForSelectedDate}
          />
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
    officeId: 2,
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
    officeId: 1,
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
    officeId: 1,
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
    officeId: 1,
    bookedItemId: 3,
    createdAt: new Date(),
    dateBookedFrom: new Date(),
    dateBookedTo: addDays(new Date(), 1),
    allDay: false,
  },
];

const seats: Seat[] = [
  {
    id: 1,
    office: {
      id: 2,
      name: 'C1 Lower',
      officeManagers: [],
      createdAt: new Date(),
    },
    type: 'Seat',
    availableForBooking: true,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 2,
    office: {
      id: 1,
      name: 'C1 Lower',
      officeManagers: [],
      createdAt: new Date(),
    },
    type: 'Seat',
    availableForBooking: true,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 3,
    office: {
      id: 1,
      name: 'C1 Lower',
      officeManagers: [],
      createdAt: new Date(),
    },
    type: 'Seat',
    availableForBooking: false,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 4,
    office: {
      id: 1,
      name: 'C1 Lower',
      officeManagers: [],
      createdAt: new Date(),
    },
    type: 'Seat',
    availableForBooking: true,
    createdAt: new Date(),
    updatedAt: null,
  },
];

export default Home;
