import { Alert, Badge, Button, Col, Divider, Row, Space, Steps, Typography } from 'antd';
import { format, isSameDay } from 'date-fns';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  DeleteOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
  LikeOutlined,
  LoadingOutlined,
  SearchOutlined
} from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../../store';
import { handleDateSelection } from '../../../store/reducers/calendar';
import { getCalendar } from '../../../store/selectors/calendar';
import { getUser } from '../../../store/selectors/user';
import { Reservation, Seat } from '../../../types';

const { Title, Text } = Typography;
const { Step } = Steps;

interface ItemSelectionProps {
  seats: Seat[];
  userBooking?: Reservation;
}

interface SelectedItem extends Seat {
  date: Date;
  userId: number;
}

const ItemSelection = ({ seats, userBooking }: ItemSelectionProps) => {
  const [step, setStep] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const { selectedDate } = useAppSelector(getCalendar);

  const selectedItemOnDate = selectedItems.find(
    (e) => e.userId === user.id && isSameDay(e.date, selectedDate)
  );

  const addItemToSelected = (item: Seat) => {
    if (selectedItems.find((e) => e.date === selectedDate)) {
      // remove the item that matches the current date and then add our new one in
      const selectedItemsFiltered = selectedItems.filter((item) => item.date !== selectedDate);
      const newItem = { ...item, date: selectedDate, userId: user.id };
      setSelectedItems([...selectedItemsFiltered, newItem]);
    } else {
      const newItem = { ...item, date: selectedDate, userId: user.id };
      setSelectedItems([...selectedItems, newItem]);
    }
  };

  const removeItemFromSelected = (
    item: SelectedItem,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newItems = selectedItems.filter((e) => !isSameDay(e.date, item.date));
    setSelectedItems(newItems);
  };

  // TODO: Finalise submission action
  const onConfirm = () => {
    console.log({ selectedItems });
    // Step + 1 to confirming
    setStep(step + 1);
    // API call during

    // On response of the API either go next step or set error
    // Toast for error + Steps turn red

    // Clear selected items and refresh reservations list from api. Websocket maybe?
  };

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
          <Title level={4}>{format(selectedDate, "do 'of' MMMM yyyy")}</Title>
          {isSameDay(selectedDate, new Date()) && (
            <div style={{ color: 'rgb(107 114 128)', fontSize: '18px' }}>Today</div>
          )}
        </div>
        <EllipsisOutlined className="cursor-pointer text-3xl hover:text-blue-500 transition" />
      </Row>
      <div className="flex flex-col justify-between h-full overflow-y-auto">
        <Row wrap>
          <CSSTransition in={!!userBooking} timeout={300} classNames="alert">
            <>
              {userBooking && (
                <div className="py-4 w-full">
                  <Alert
                    message="Booking already confirmed"
                    // description={`Seat ${userBooking.bookedItemId}`}
                    description=" "
                    type="success"
                    showIcon
                    className="w-full"
                  />
                </div>
              )}
            </>
          </CSSTransition>
          <CSSTransition in={!!selectedItemOnDate} timeout={300} classNames="alert">
            <>
              {selectedItemOnDate && (
                <div className="py-4 w-full">
                  <Alert
                    message="Booking pending confirmation"
                    description="You are still able to select another seat."
                    type="info"
                    showIcon
                    className="w-full"
                  />
                </div>
              )}
            </>
          </CSSTransition>
          {seats.map((seat: Seat) => {
            return (
              <Col
                key={seat.id}
                span={12}
                className={`transition-all py-2 px-3 ${
                  !!userBooking
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'hover:bg-slate-100 cursor-pointer'
                }`}
                onClick={() => !userBooking && addItemToSelected(seat)}
              >
                <Badge color="green" /> {`${seat.type} ${seat.id}`}
              </Col>
            );
          })}
        </Row>
        <div>
          <Divider />
          <Space size="large" direction="vertical" className="w-full">
            <div>
              <Title level={5}>Your Selections</Title>
              {selectedItems.length === 0 ? (
                <Text italic>Selected seats are displayed here</Text>
              ) : (
                <>
                  {selectedItems.map((item, idx) => {
                    return (
                      <Row
                        key={item.id + '_' + idx}
                        className="flex items-center justify-between cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 w-full"
                        onClick={() => dispatch(handleDateSelection({ date: item.date }))}
                      >
                        <div>
                          <Badge color="orange" />{' '}
                          {`Seat ${item.id} - ${format(item.date, "do 'of' MMMM yyyy")}`}
                        </div>
                        <div
                          className="flex items-center transition-all p-2 rounded-lg hover:bg-slate-300"
                          onClick={(e) => removeItemFromSelected(item, e)}
                        >
                          <DeleteOutlined />
                        </div>
                      </Row>
                    );
                  })}
                </>
              )}
            </div>
            <Button
              disabled={selectedItems.length === 0}
              size="large"
              type="primary"
              onClick={() => onConfirm()}
            >
              Confirm Reservations
            </Button>
          </Space>
        </div>
      </div>
    </Col>
  );
};

export default ItemSelection;
