import { Badge, List, Space, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RightOutlined, TableOutlined } from '@ant-design/icons';

import { BookableItem } from '../../../../types';

const { Title } = Typography;

interface ItemListProps {
  bookableItems: BookableItem[];
}

export const ItemList = ({ bookableItems }: ItemListProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      <Title level={5} className="flex items-center gap-2">
        <TableOutlined />
        Bookable Items
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={bookableItems}
        split={false}
        size={'small'}
        renderItem={(i) => (
          <List.Item
            className="transition-all group hover:bg-slate-100 cursor-pointer"
            onClick={() => navigate(`${pathname}/bookable-item/${i.id}`)}
          >
            <div className="flex items-center justify-between w-full">
              <Space size={'small'}>
                <Badge color={i.availableForBooking ? 'green' : 'red'} />
                <div>
                  {i.type} {i.id}
                </div>
              </Space>
              <RightOutlined className="transition-all group-hover:text-blue-500" key="visit" />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
