import { Badge, List, Space, Typography } from 'antd';
import React from 'react';

import { CalendarOutlined, RightOutlined } from '@ant-design/icons';

import { Reservation } from '../../../../types';
import { formatSelectionTimeDate } from '../../../../utils/formatSelectionDateTime';

const { Text, Title } = Typography;

interface ReservationListProps {
  reservations?: Reservation[] | [];
}

export const ReservationList = ({ reservations }: ReservationListProps) => {
  if (!reservations || reservations.length === 0)
    return <Text>No reservations found for this office...</Text>;

  return (
    <div>
      <Title level={5} className="flex items-center gap-2">
        <CalendarOutlined />
        Reservations
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={reservations}
        split={false}
        size={'small'}
        renderItem={(i) => (
          <List.Item className="transition-all group hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center justify-between w-full">
              <Space size={'small'}>
                <Badge color={i.cancelled ? 'red' : 'green'} />
                {formatSelectionTimeDate(i)}
              </Space>
              <RightOutlined className="transition-all group-hover:text-blue-500" key="visit" />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
