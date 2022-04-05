import { Breadcrumb, Card, Divider, Space, Statistic, Typography } from 'antd';
import { format, minutesToHours } from 'date-fns';

import { PageLayout } from '../../../../components';
import { Office } from '../../../../types';

const { Text } = Typography;

interface OfficePageContainerProps {
  office?: Office;
  children: React.ReactNode;
}

export const OfficePageContainer = ({ office, children }: OfficePageContainerProps) => {
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
              {!!office && (
                <>
                  <Text strong className="text-2xl">
                    {office.name}
                  </Text>
                  <Text italic>Created on {format(office.createdAt, 'dd/MM/yyyy')}</Text>
                </>
              )}
            </div>
            <div className="flex gap-4">
              {!!office && (
                <>
                  <Statistic
                    title="Active Hours"
                    value={`${format(office!.activeTimes.start, 'HH:mm')} - ${format(
                      office!.activeTimes.end,
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
                    value={`${minutesToHours(office!.bookingLength)} hours`} // TODO: Create value check function to display minutes, hours etc
                  />
                </>
              )}
            </div>
          </div>
        </Space>
      </Card>
      {children}
    </PageLayout>
  );
};
