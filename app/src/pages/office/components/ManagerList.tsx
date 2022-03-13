import { Row, Typography } from 'antd';
import React from 'react';

import { RightOutlined, UserOutlined } from '@ant-design/icons';

import { User } from '../../../types';

const { Title } = Typography;

interface ManagerListProps {
  managers: User[];
}

export const ManagerList = ({ managers }: ManagerListProps) => {
  return (
    <Row>
      <Title level={5} className="flex items-center gap-2">
        <UserOutlined />
        Managers
      </Title>
      {managers.map((i) => {
        return (
          <div className="flex items-center justify-between cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 w-full group">
            {i.firstName} {i.lastName}
            <RightOutlined className="transition-all group-hover:text-blue-500" key="visit" />
          </div>
        );
      })}
    </Row>
  );
};
