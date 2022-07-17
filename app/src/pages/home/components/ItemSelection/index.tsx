import { Button, Col, Divider, Row, Space, Typography } from 'antd';
import { format, getHours, isSameDay, isSameMinute, set } from 'date-fns';
import React, { useCallback, useState } from 'react';

import { EllipsisOutlined } from '@ant-design/icons';

import { useAvailableBookableItemsGet } from '../../../../api';
import { useCalendar, useItemSelectionData } from '../../../../hooks';
import { BookableItem, Reservation } from '../../../../types';
import { BookableItemsMap } from './BookableItems';
import { BookingSteps } from './BookingSteps';
import { SelectedDateBookingCheck } from './SelectedDateBookingCheck';
import { SelectedItems } from './SelectedItems';

const { Title } = Typography;

const ItemSelection = () => {
  const [step, setStep] = useState<number>(0);
  const { office, reservations, createReservation, userId } = useItemSelectionData();
  const { view, selectedDate, handleDateSelection, selectedItems, setSelectedItems, setView } =
    useCalendar();

  const officeId = office?.id as number;

  const { data: bookableItems = [] } = useAvailableBookableItemsGet(
    { cacheTime: 0, staleTime: 0, enabled: !!officeId },
    {
      dateFrom: selectedDate.dateFrom,
      dateTo: selectedDate.dateTo,
      officeId,
      isAllDay: 'true',
    }
  );

  const isAllDay = view === 'month';

  // User id must match, if it's not an all day booking then check the start date of the booking
  // if it's an all day booking check to make sure it's the same day and assigned the isAllDay property
  // User id check is not necessary for selected items but for reservation checking it is.
  const findSelectedItemOrReservation = useCallback(
    (item: Reservation) => {
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
    },
    [isAllDay, userId, selectedDate.dateFrom]
  );

  // Check for a confirmed booking
  const userHasReservationOnSelectedDate = () => {
    return !!reservations.find(findSelectedItemOrReservation);
  };
  // Check for an unconfirmed booking
  const selectedItemOnDate = selectedItems.find(findSelectedItemOrReservation);
  const reservedItemsOnDate = reservations.filter((r) =>
    isSameDay(r.dateBookedFrom, selectedDate.dateFrom)
  );

  const handleSelectedItemOnClick = useCallback(
    (item: BookableItem) => {
      const officeHours = {
        start: getHours(office?.activeTimes.start ?? selectedDate.dateFrom),
        end:
          getHours(office?.activeTimes.end ?? selectedDate.dateTo) +
          (office!.bookingLength ?? 0) / 60,
      };

      console.log({ selectedDate });
      console.log({ officeHours });

      // If it's an all day booking we use the office hours for start & finish times.
      // Otherwise it's the selected date's hours.
      const dateBookedFrom = isAllDay
        ? set(selectedDate.dateFrom, { hours: officeHours.start })
        : selectedDate.dateFrom;
      const dateBookedTo = isAllDay
        ? set(selectedDate.dateTo, { hours: officeHours.end })
        : selectedDate.dateTo;

      const newSelectedItem: Reservation = {
        id: undefined,
        bookedItemId: item.id,
        bookedItemType: item.type,
        cancelled: false,
        dateBookedFrom,
        dateBookedTo,
        userId,
        isAllDay,
      };

      // Find existing item selection on date & time and replace or append
      if (selectedItems.find(findSelectedItemOrReservation)) {
        const selectedItemsFiltered = selectedItems.filter(
          (e) => !findSelectedItemOrReservation(e)
        );
        setSelectedItems([...selectedItemsFiltered, newSelectedItem]);
      } else {
        setSelectedItems([...selectedItems, newSelectedItem]);
      }
    },
    [
      isAllDay,
      office,
      userId,
      selectedDate,
      selectedItems,
      setSelectedItems,
      findSelectedItemOrReservation,
    ]
  );

  const removeItemFromSelected = useCallback(
    (item: Reservation, event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.stopPropagation();
      const newItems = selectedItems.filter(
        (e) =>
          !(
            isSameMinute(item.dateBookedFrom, e.dateBookedFrom) ||
            (isSameDay(item.dateBookedFrom, e.dateBookedFrom) && item.isAllDay)
          )
      );
      setSelectedItems(newItems);
    },
    [selectedItems, setSelectedItems]
  );

  const onConfirm = () => {
    setStep(1);
    createReservation(selectedItems).then(() => {
      setSelectedItems([]);
      setStep(2);
      setTimeout(() => setStep(0), 3000);
    });
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
      <BookingSteps step={step} />
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
          <SelectedDateBookingCheck
            userHasReservationOnSelectedDate={userHasReservationOnSelectedDate}
            reservedItemsOnDate={reservedItemsOnDate}
            selectedItemOnDate={selectedItemOnDate}
          />
          <BookableItemsMap
            bookableItems={bookableItems}
            handleSelectedItemOnClick={handleSelectedItemOnClick}
            userHasReservationOnSelectedDate={userHasReservationOnSelectedDate}
            selectedDate={selectedDate}
          />
        </Row>
        <div>
          <Divider />
          <Space size="large" direction="vertical" className="w-full">
            <SelectedItems
              selectedItems={selectedItems}
              handleDateSelection={handleDateSelection}
              removeItemFromSelected={removeItemFromSelected}
              setView={setView}
            />
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
