import { Avatar, Breadcrumb, Card, Col, Divider, Row, Space, Statistic, Typography } from 'antd';
import { addDays, isSameDay } from 'date-fns';
import React from 'react';

import { Calendar, PageLayout } from '../../components';
import { useCalendar } from '../../hooks/calendar';
import { useAppSelector } from '../../store';
import { getOffice } from '../../store/selectors/office';
import { getUser } from '../../store/selectors/user';
import { Office, Reservation, Seat } from '../../types';
import ItemSelection from './components/ItemSelection';
import UpcomingReservations from './components/UpcomingReservations';

const { Title, Text } = Typography;

const Home = () => {
  const user = useAppSelector(getUser);
  const office = useAppSelector(getOffice);
  const { selectedDate } = useCalendar();

  // TODO: Info to come from the API
  const reservationsForSelectedDate = reservations.filter((r) =>
    isSameDay(r.dateBookedFrom, selectedDate)
  );
  const userBookingForSelectedDate = reservationsForSelectedDate.find((r) => r.userId === user.id);
  const seatsAvailable = () => {
    const seatsAvail = seats(office).filter((s) => {
      const foundSeat = reservationsForSelectedDate.find(
        (r) => r.bookedItemId === s.id && r.officeId === office.id
      );
      if (foundSeat || !s.availableForBooking) return false;
      return s.office.id === office.id;
    });
    return seatsAvail;
  };

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
        <UpcomingReservations reservations={reservations} />
      </Card>
      <Row gutter={24}>
        <Col span={16}>
          <Calendar reservations={reservations} />
        </Col>
        <Col span={8}>
          <ItemSelection seats={seatsAvailable()} userBooking={userBookingForSelectedDate} />
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

const seats = (office: Office) => {
  const seatsToReturn: Seat[] = [
    {
      id: 1,
      office,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      office,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 3,
      office,
      type: 'Seat',
      availableForBooking: false,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 4,
      office,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];
  return seatsToReturn;
};

export default Home;
