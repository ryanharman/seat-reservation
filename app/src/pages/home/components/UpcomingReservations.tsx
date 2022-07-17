import { Card, Divider, Row, Skeleton, Space, Typography } from 'antd';
import { format, isAfter } from 'date-fns';
import React from 'react';

import { ExclamationCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import { useReservationGet } from '../../../api';

const { Title, Text } = Typography;

const UpcomingReservations = () => {
  const { data: reservations, isFetching } = useReservationGet({ userId: 1 }); // TODO: Hardcoded -- fix

  const upcomingReservationsOnly = reservations?.filter(
    (reservation) => isAfter(reservation.dateBookedFrom, new Date()) && !reservation.cancelled
  );

  return (
    <Skeleton loading={isFetching} className="min-h-[250px] py-2">
      <Row className="overflow-x-auto scroll-p-6 py-2">
        <Space size="large">
          {upcomingReservationsOnly?.map((res) => {
            return (
              <Card
                key={res.id}
                type="inner"
                // actions={[<EditOutlined key="edit" />, <RightOutlined key="visit" />]}
                className="mb-6 relative w-max "
              >
                <div className="">
                  <Title level={5}>Generic Office Name</Title>
                  <div className="flex items-baseline gap-2">
                    <Text strong>{format(res.dateBookedTo, 'dd/MM/yyyy')}</Text>—
                    <Text>
                      {res.bookedItemType} {res.bookedItemId}
                    </Text>
                  </div>
                  {res.cancelled && (
                    <div className="absolute top-11 flex gap-2 items-center text-red-600">
                      <ExclamationCircleOutlined />
                      <Text strong className="text-red-600">
                        Cancelled
                      </Text>
                    </div>
                  )}
                  <Divider />
                  <Space size="large" className="h-[52px]">
                    {res.isAllDay ? (
                      <Text strong>All day booking</Text>
                    ) : (
                      <>
                        <Space direction="vertical">
                          <Text>Start Time</Text>
                          <Text strong>{format(res.dateBookedFrom, 'HH:mm')}</Text>
                        </Space>
                        <RightCircleOutlined className="text-xl" />
                        <Space direction="vertical">
                          <Text>End Time</Text>
                          <Text strong>{format(res.dateBookedTo, 'HH:mm')}</Text>
                        </Space>
                      </>
                    )}
                  </Space>
                </div>
              </Card>
            );
          })}
        </Space>
      </Row>
    </Skeleton>
  );
};

export default UpcomingReservations;
