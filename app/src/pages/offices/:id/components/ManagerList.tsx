import { List, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RightOutlined, UserOutlined } from '@ant-design/icons';

import { User } from '../../../../types';

const { Title } = Typography;

interface ManagerListProps {
  managers: User[];
}

export const ManagerList = ({ managers }: ManagerListProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <Title level={5} className="flex items-center gap-2">
        <UserOutlined />
        Managers
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={managers}
        split={false}
        size={'small'}
        renderItem={(i) => (
          <List.Item
            className="transition-all group hover:bg-slate-100 cursor-pointer"
            onClick={() => navigate(`/users/${i.id}`)}
          >
            <div className="flex items-center justify-between w-full">
              {i.firstName} {i.lastName}
              <RightOutlined className="transition-all group-hover:text-blue-500" key="visit" />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
