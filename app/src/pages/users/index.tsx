import { Breadcrumb, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PageLayout } from '../../components';
import { User } from '../../types';

const UsersPage = () => {
  const navigate = useNavigate();
  const columns = useUsersColumns();

  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Users</Breadcrumb.Item>
      </Breadcrumb>
      <Table
        columns={columns}
        rowClassName="cursor-pointer"
        dataSource={tempUsers}
        onRow={(record) => {
          return {
            onClick: (event) => navigate(`/users/${record.id}`),
          };
        }}
      />
    </PageLayout>
  );
};

const useUsersColumns = () => {
  const columns: ColumnsType<User> = [
    {
      title: 'Name',
      dataIndex: '',
      key: 'name',
      render: (_value, record) => (
        <div>
          {record.firstName} {record.lastName}
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  return columns;
};

const tempUsers: User[] = [
  {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Harman',
    role: 'Legend',
    createdAt: new Date(),
    updatedAt: undefined,
    reservations: [],
  },
];

export default UsersPage;
