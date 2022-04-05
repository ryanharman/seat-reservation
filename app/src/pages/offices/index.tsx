import { Breadcrumb, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useOfficeGet } from '../../api/useOffice';
import { PageLayout } from '../../components';
import { Office } from '../../types';

const OfficesPage = () => {
  const navigate = useNavigate();
  const columns = useOfficesColumns();
  const { data: offices } = useOfficeGet();

  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Offices</Breadcrumb.Item>
      </Breadcrumb>
      <Table
        columns={columns}
        rowClassName="cursor-pointer"
        dataSource={offices}
        onRow={(record) => ({ onClick: () => navigate(`/offices/${record.id}`) })}
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

export default OfficesPage;
