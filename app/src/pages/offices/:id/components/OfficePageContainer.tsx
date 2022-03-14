import { Breadcrumb, Card, Divider, Space, Statistic, Typography } from 'antd';
import { format, minutesToHours } from 'date-fns';

import { tempOfficeObj } from '../';
import { PageLayout } from '../../../../components';

const { Text } = Typography;

interface OfficePageContainerProps {
  children: React.ReactNode;
}

export const OfficePageContainer = ({ children }: OfficePageContainerProps) => {
  return (
    <PageLayout className="flex flex-col gap-6">
      <Breadcrumb className="pb-4">
        <Breadcrumb.Item>Offices</Breadcrumb.Item>
        <Breadcrumb.Item>Office Page</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Space direction="vertical" className="w-full">
          <div className="flex justify-between">
            <div className="flex flex-col justify-evenly">
              <Text strong className="text-2xl">
                {tempOfficeObj.name}
              </Text>
              <Text italic>Created on {format(tempOfficeObj.createdAt, 'dd/MM/yyyy')}</Text>
            </div>
            <div className="flex gap-4">
              <Statistic
                title="Active Hours"
                value={`${format(tempOfficeObj.activeTimes.start, 'HH:mm')} - ${format(
                  tempOfficeObj.activeTimes.end,
                  'HH:mm'
                )}`}
              />
              <Divider
                type="vertical"
                style={{
                  height: '100%',
                }}
              />
              <Statistic
                title="Booking Length"
                value={`${minutesToHours(tempOfficeObj.bookingLength)} hours`} // TODO: Create value check function to display minutes, hours etc
              />
            </div>
          </div>
        </Space>
      </Card>
      {children}
    </PageLayout>
  );
};
