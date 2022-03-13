import { Badge, Col, Row, Space, Typography } from 'antd';
import React from 'react';

import { RightOutlined, TableOutlined } from '@ant-design/icons';

import { Seat } from '../../../types';

const { Title } = Typography;

interface ItemListProps {
  seats: Seat[];
}

export const ItemList = ({ seats }: ItemListProps) => {
  return (
    <Row>
      <Title level={5} className="flex items-center gap-2">
        <TableOutlined />
        Bookable Items
      </Title>
      {seats.map((i) => {
        return (
          <div className="flex items-center justify-between cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 w-full group">
            <Col>
              <Space size={'small'}>
                <Badge color={i.availableForBooking ? 'green' : 'red'} />
                {i.type}
                {i.id}
              </Space>
            </Col>
            <RightOutlined className="transition-all group-hover:text-blue-500" key="visit" />
          </div>
        );
      })}
    </Row>
  );
};
