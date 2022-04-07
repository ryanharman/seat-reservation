import { Row, Steps } from 'antd';

import {
  InfoCircleOutlined,
  LikeOutlined,
  LoadingOutlined,
  SearchOutlined
} from '@ant-design/icons';

const { Step } = Steps;

interface BookingStepsProps {
  step: number;
}

export const BookingSteps = ({ step }: BookingStepsProps) => {
  return (
    <Row className="mb-6">
      <Steps size="small" current={step}>
        <Step
          icon={<SearchOutlined style={{ display: 'inline-block', verticalAlign: 'top' }} />}
          title={step === 0 && 'Select Items'}
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
  );
};
