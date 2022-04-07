import { Alert } from 'antd';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { Reservation } from '../../../../types';
import { formatSelectionTimeDate } from '../../../../utils/formatSelectionDateTime';

interface SelectedDateBookingCheckProps {
  reservedItemsOnDate: Reservation[];
  selectedItemOnDate?: Reservation;
  userHasReservationOnSelectedDate: () => boolean;
}

export const SelectedDateBookingCheck = ({
  reservedItemsOnDate,
  selectedItemOnDate,
  userHasReservationOnSelectedDate,
}: SelectedDateBookingCheckProps) => {
  return (
    <>
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
    </>
  );
};
