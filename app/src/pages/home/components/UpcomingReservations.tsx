import { Card, Divider, Row, Space, Typography } from 'antd';
import { format } from 'date-fns';
import React from 'react';

import {
  EditOutlined,
  ExclamationCircleOutlined,
  RightCircleOutlined,
  RightOutlined
} from '@ant-design/icons';

import { useAppSelector } from '../../../store';
import { getUser } from '../../../store/selectors/user';

const { Title, Text } = Typography;

const UpcomingReservations = () => {
  const { reservations } = useAppSelector(getUser);

  return (
    <Row className="overflow-x-auto scroll-p-6 py-2">
      <Space size="large">
        {reservations.map((res) => {
          return (
            <Card
              key={res.id}
              type="inner"
              actions={[<EditOutlined key="edit" />, <RightOutlined key="visit" />]}
              className="mb-6 relative"
            >
              <div className="flex items-baseline gap-2">
                <Title level={5}>C1 Lower</Title>—<Text>Seat {res.bookedItemId}</Text>
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
              <Space size="large">
                <Space direction="vertical">
                  <Text>Start Time</Text>
                  <Text strong>{format(res.dateBookedFrom, 'dd/MM/yyyy')}</Text>
                </Space>
                <RightCircleOutlined className="text-xl" />
                <Space direction="vertical">
                  <Text>End Time</Text>
                  <Text strong>{format(res.dateBookedTo, 'dd/MM/yyyy')}</Text>
                </Space>
              </Space>
            </Card>
          );
        })}
      </Space>
    </Row>
  );
};

export default UpcomingReservations;
