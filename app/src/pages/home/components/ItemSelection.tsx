import { Alert, Badge, Button, Col, Divider, Row, Space, Steps, Typography } from 'antd';
import { format, isSameDay, isSameMinute } from 'date-fns';
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
import { useStore } from '../../../store/index';
import { Reservation, Seat } from '../../../types';
import { formatSelectionTimeDate } from '../../../utils/formatSelectionDateTime';

const { Title, Text } = Typography;
const { Step } = Steps;

// TODO: Break down into separate components at a later date
const ItemSelection = () => {
  const [step, setStep] = useState<number>(0);
  const { id: userId, reservations } = useStore((state) => state.user);
  const { id: officeId, seats } = useStore((state) => state.office);
  const { view, selectedDate, handleDateSelection, selectedItems, setSelectedItems, setView } =
    useCalendar();

  const isAllDay = view === 'month';

  // User id must match, if it's not an all day booking then check the start date of the booking
  // if it's an all day booking check to make sure it's the same day and assigned the isAllDay property
  // User id check is not necessary for selected items but for reservation checking it is.
  const findSelectedItemOrReservation = (item: Reservation) => {
    const checkForUser = item.userId === userId;
    // If it's an all day booking we match day only and remove all time
    // based selections.
    if (isAllDay) {
      return isSameDay(item.dateBookedFrom, selectedDate.dateFrom) && checkForUser;
    }

    const checkForDayBooking =
      isSameDay(item.dateBookedFrom, selectedDate.dateFrom) && item.isAllDay;
    if (checkForDayBooking) return checkForUser;

    const checkForTimeBooking =
      isSameMinute(item.dateBookedFrom, selectedDate.dateFrom) && !item.isAllDay;
    if (checkForTimeBooking) return checkForUser;

    return false;
  };

  // Check for a confirmed booking
  const userHasReservationOnSelectedDate = () => {
    return !!reservations.find(findSelectedItemOrReservation);
  };
  // Check for an unconfirmed booking
  const selectedItemOnDate = selectedItems.find(findSelectedItemOrReservation);
  // TODO: This needs to account for multiple bookings on one day
  const reservedItemsOnDate = reservations.filter((r) =>
    isSameDay(r.dateBookedFrom, selectedDate.dateFrom)
  );

  const handleSelectedItemOnClick = (item: Seat) => {
    const newSelectedItem: Reservation = {
      id: -1,
      bookedItemId: item.id,
      bookedItemType: item.type,
      cancelled: false,
      dateBookedFrom: selectedDate.dateFrom,
      dateBookedTo: selectedDate.dateTo,
      officeId,
      userId,
      isAllDay,
    };

    if (selectedItems.find(findSelectedItemOrReservation)) {
      const selectedItemsFiltered = selectedItems.filter((e) => !findSelectedItemOrReservation(e));
      setSelectedItems([...selectedItemsFiltered, newSelectedItem]);
    } else {
      setSelectedItems([...selectedItems, newSelectedItem]);
    }
  };

  const removeItemFromSelected = (
    item: Reservation,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newItems = selectedItems.filter(
      // TODO: Probably add this into the findSelectedItemQuery and make it a bit clearer?
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
    // Step + 1 to confirming
    setStep(1);
    // API call during
    setTimeout(() => {
      setStep(2);
      setSelectedItems([]);
      setTimeout(() => {
        setStep(0);
      }, 5000);
    }, 5000);

    // On response of the API either go next step or set error
    // Toast for error + Steps turn red

    // Clear selected items and refresh reservations list from api. Websocket maybe?
  };

  const selectedDateFormatted =
    view === 'month'
      ? format(selectedDate.dateFrom, "do 'of' MMMM yyyy")
      : `${format(selectedDate.dateFrom, "do 'of' MMMM yyyy HH:mm")} - ${format(
          selectedDate.dateTo,
          'HH:mm'
        )}`;

  return (
    <Col className="flex flex-col h-full bg-white p-6">
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
      {/* TODO: The below code needs to be extracted into individual components to reduce amount being rerendered */}
      <Row justify="space-between">
        <div className="flex items-baseline gap-4">
          <Title level={4}>{selectedDateFormatted}</Title>
          {isSameDay(selectedDate.dateFrom, new Date()) && (
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
                    message="Booking confirmed"
                    description={`${reservedItemsOnDate.map(
                      (i, idx) => (idx > 0 ? '\n' : '') + formatSelectionTimeDate(i, true)
                    )}`}
                    type="success"
                    showIcon
                    className="w-full whitespace-pre-line"
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
                <Text italic>Selected items are displayed here</Text>
              ) : (
                <>
                  {selectedItems.map((item, idx) => {
                    return (
                      <Row
                        key={item.id + '_' + idx}
                        className="flex items-center justify-between cursor-pointer transition-all py-2 px-3 hover:bg-slate-100 w-full"
                        onClick={() => {
                          handleDateSelection({
                            dateFrom: item.dateBookedFrom,
                            dateTo: item.dateBookedTo,
                          });
                          if (!item.isAllDay) {
                            setView('week');
                          }
                        }}
                      >
                        <div>
                          <Badge color="orange" /> {formatSelectionTimeDate(item)}
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
              disabled={selectedItems.length === 0 || step > 0}
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
