import { Alert, Badge, Button, Col, Divider, Row, Space, Steps, Typography } from 'antd';
import { addMinutes, format, isSameDay } from 'date-fns';
import isSameMinute from 'date-fns/isSameMinute';
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

import { useCalendar } from '../../../hooks/calendar';
import { useAppSelector } from '../../../store';
import { getOffice } from '../../../store/selectors/office';
import { getUser } from '../../../store/selectors/user';
import { Reservation, Seat } from '../../../types';

const { Title, Text } = Typography;
const { Step } = Steps;
interface SelectedItem extends Seat {
  dateBookedFrom: Date;
  dateBookedTo: Date;
  userId: number;
  isAllDay: boolean;
}
// TODO: Possibly break down into separate components for each part
const ItemSelection = () => {
  const [step, setStep] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const { id: userId, reservations } = useAppSelector(getUser);
  const { bookingLength, seats } = useAppSelector(getOffice);
  const { view, selectedDate, handleDateSelection } = useCalendar();

  const isAllDay = view === 'month';

  // User id must match, if it's not an all day booking then check the start date of the booking
  // if it's an all day booking check to make sure it's the same day and assigned the isAllDay property
  // User id check is not necessary for selected items but for reservation checking it is.
  const findSelectedItemOrReservation = (item: SelectedItem | Reservation) => {
    const checkForWeekBooking = isSameMinute(item.dateBookedFrom, selectedDate) && !item.isAllDay;
    const checkForDayBooking = isSameDay(item.dateBookedFrom, selectedDate) && item.isAllDay;
    const checkForUser = item.userId === userId;
    return (checkForWeekBooking || checkForDayBooking) && checkForUser;
  };

  // Check for a confirmed booking
  const userHasReservationOnSelectedDate = () => {
    return !!reservations.find((r) => findSelectedItemOrReservation(r));
  };
  // Check for an unconfirmed booking
  const selectedItemOnDate = selectedItems.find((e) => findSelectedItemOrReservation(e));

  const handleSelectedItemOnClick = (item: Seat) => {
    console.log('after this');
    if (selectedItems.find((e) => findSelectedItemOrReservation(e))) {
      // remove the item that matches the current date and then add our new one in
      const selectedItemsFiltered = selectedItems.filter((e) => !findSelectedItemOrReservation(e));
      console.log({ selectedItemsFiltered });
      const newItem = {
        ...item,
        dateBookedFrom: selectedDate,
        dateBookedTo: addMinutes(selectedDate, bookingLength),
        userId: userId,
        isAllDay,
      };
      setSelectedItems([...selectedItemsFiltered, newItem]);
    } else {
      const newItem = {
        ...item,
        dateBookedFrom: selectedDate,
        dateBookedTo: addMinutes(selectedDate, bookingLength),
        userId: userId,
        isAllDay,
      };
      setSelectedItems([...selectedItems, newItem]);
    }
  };

  const removeItemFromSelected = (
    item: SelectedItem,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newItems = selectedItems.filter(
      // TODO: Probably add this into the findSelectedItemQuery and make it a bit clearer
      (e) =>
        !(
          isSameMinute(item.dateBookedFrom, e.dateBookedFrom) ||
          (isSameDay(item.dateBookedFrom, e.dateBookedFrom) && item.isAllDay)
        )
    );
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

  const selectedDateFormatted =
    view === 'month'
      ? format(selectedDate, "do 'of' MMMM yyyy")
      : `${format(selectedDate, "do 'of' MMMM yyyy HH:mm")} - ${format(
          addMinutes(selectedDate, bookingLength),
          'HH:mm'
        )}`;

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
          <Title level={4}>{selectedDateFormatted}</Title>
          {isSameDay(selectedDate, new Date()) && (
            <div style={{ color: 'rgb(107 114 128)', fontSize: '18px' }}>Today</div>
          )}
        </div>
        <EllipsisOutlined className="cursor-pointer text-3xl hover:text-blue-500 transition" />
      </Row>
      <div className="flex flex-col justify-between h-full overflow-y-auto">
        <Row wrap>
          <CSSTransition in={userHasReservationOnSelectedDate()} timeout={300} classNames="alert">
            <>
              {userHasReservationOnSelectedDate() && (
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
                  userHasReservationOnSelectedDate()
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'hover:bg-slate-100 cursor-pointer'
                }`}
                onClick={() =>
                  !userHasReservationOnSelectedDate() && handleSelectedItemOnClick(seat)
                }
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
                        onClick={() => handleDateSelection(item.dateBookedFrom)}
                      >
                        <div>
                          <Badge color="orange" />{' '}
                          {item.isAllDay
                            ? `Seat ${item.id} - ${format(
                                item.dateBookedFrom,
                                "do 'of' MMMM yyyy"
                              )} - All day`
                            : `Seat ${item.id} - ${format(
                                item.dateBookedFrom,
                                "do 'of' MMMM yyyy HH:mm"
                              )} - ${format(
                                addMinutes(item.dateBookedFrom, bookingLength),
                                'HH:mm'
                              )}`}
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
