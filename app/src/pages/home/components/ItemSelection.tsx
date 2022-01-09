import React, { useState } from 'react';
import { format, isSameDay } from 'date-fns';
import { Badge, Button, Col, Divider, Row, Space, Steps, Typography } from 'antd';
import {
  EllipsisOutlined,
  InfoCircleOutlined,
  LikeOutlined,
  LoadingOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Step } = Steps;

interface ItemSelectionProps {
  date: Date;
}

const ItemSelection = ({ date }: ItemSelectionProps) => {
  const [step, setStep] = useState<number>(0);

  return (
    <Col className="flex flex-col h-full bg-white p-6">
      <Row className="mb-6">
        <Steps size="small" current={step}>
          <Step
            icon={<SearchOutlined style={{ display: 'inline-block', verticalAlign: 'top' }} />}
            title={step === 0 && 'Select Seats'}
          />
          <Step
            icon={
              step === 1 ? (
                <LoadingOutlined style={{ display: 'inline-block', verticalAlign: 'top' }} />
              ) : (
                <InfoCircleOutlined style={{ display: 'inline-block', verticalAlign: 'top' }} />
              )
            }
            title={step === 1 && 'Confirming Reservations'}
          />
          <Step
            icon={<LikeOutlined style={{ display: 'inline-block', verticalAlign: 'top' }} />}
            title={step === 2 && 'Booking Complete'}
          />
        </Steps>
      </Row>
      <Row justify="space-between">
        <div className="flex items-baseline gap-4">
          <Title level={4}>{format(date, "do 'of' MMMM yyyy")}</Title>
          {isSameDay(date, new Date()) && (
            <div style={{ color: 'rgb(107 114 128)', fontSize: '18px' }}>Today</div>
          )}
        </div>
        <EllipsisOutlined className="cursor-pointer text-3xl hover:text-blue-500 transition" />
      </Row>
      <div className="flex flex-col justify-between h-full overflow-y-auto">
        <Row wrap>
          {/* TODO: Create a component for seats to map over */}
          <Col span={12} className="cursor-pointer transition-all py-2 px-3 hover:bg-slate-100">
            <Badge color="green" /> Seat 2
          </Col>
          <Col span={12} className="cursor-pointer transition-all py-2 px-3 hover:bg-slate-100">
            <Badge color="red" /> Seat 3
          </Col>
          <Col span={12} className="cursor-pointer transition-all py-2 px-3 hover:bg-slate-100">
            <Badge color="green" /> Seat 4
          </Col>
        </Row>
        <div>
          <Divider />
          <Space size="large" direction="vertical">
            <div>
              <Title level={5}>Your Selections</Title>
              <Text>Selected seats displayed here</Text>
            </div>
            <Button size="large" type="primary">
              Confirm Reservations
            </Button>
          </Space>
        </div>
      </div>
    </Col>
  );
};

export default ItemSelection;
