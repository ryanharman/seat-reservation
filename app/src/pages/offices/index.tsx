import { Breadcrumb, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PageLayout } from '../../components';
import { Office } from '../../types';

const OfficesPage = () => {
  const navigate = useNavigate();
  const columns = useOfficesColumns();

  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Offices</Breadcrumb.Item>
      </Breadcrumb>
      <Table
        columns={columns}
        rowClassName="cursor-pointer"
        dataSource={tempOffices}
        onRow={(record) => {
          return {
            onClick: (event) => navigate(`/offices/${record.id}`),
          };
        }}
      />
    </PageLayout>
  );
};

const useOfficesColumns = () => {
  const columns: ColumnsType<Office> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return columns;
};

const tempOffices: Office[] = [
  {
    id: 1,
    name: 'Generic Office Name',
    officeManagers: [],
    bookableItems: [
      {
        id: 1,
        type: 'Room',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        id: 2,
        type: 'Seat',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        id: 3,
        type: 'Seat',
        availableForBooking: false,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        id: 4,
        type: 'Seat',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: null,
      },
    ],
    activeTimes: {
      start: addHours(startOfToday(), 6),
      end: subHours(endOfToday(), 5),
    },
    bookingLength: 120,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Ryan's Bedroom",
    officeManagers: [],
    bookableItems: [
      {
        id: 1,
        type: 'Room',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        id: 2,
        type: 'Seat',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        id: 3,
        type: 'Seat',
        availableForBooking: false,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        id: 4,
        type: 'Seat',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: null,
      },
    ],
    activeTimes: {
      start: addHours(startOfToday(), 6),
      end: subHours(endOfToday(), 5),
    },
    bookingLength: 120,
    createdAt: new Date(),
  },
];

export default OfficesPage;
