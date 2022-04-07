import { Badge, List, Space, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CalendarOutlined, RightOutlined } from '@ant-design/icons';

import { IconWrapper } from '../../../../components';
import { Reservation } from '../../../../types';
import { formatSelectionTimeDate } from '../../../../utils/formatSelectionDateTime';

const { Text, Title } = Typography;

interface ReservationListProps {
  reservations?: Reservation[] | [];
}

export const ReservationList = ({ reservations }: ReservationListProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        pagination={{
          pageSize: 10,
          size: 'small',
          hideOnSinglePage: true,
        }}
        dataSource={reservations}
        split={false}
        size={'small'}
        renderItem={(i) => (
          <List.Item
            className="transition-all group hover:bg-slate-100 cursor-pointer"
            onClick={() => navigate(`${pathname}/reservation/${i.id}`)}
          >
            <div className="flex items-center justify-between w-full">
              <Space size={'small'}>
                <Badge color={i.cancelled ? 'red' : 'green'} />
                {formatSelectionTimeDate(i)}
              </Space>
              <IconWrapper>
                <RightOutlined key="visit" />
              </IconWrapper>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
