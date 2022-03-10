import { addMinutes, format } from 'date-fns';

import { Reservation } from '../types';

export const formatSelectionTimeDate = (
  item: Reservation,
  bookingLength: number,
  timeOnly?: boolean
) => {
  if (timeOnly) {
    return item.isAllDay
      ? `Seat ${item.bookedItemId} - All day`
      : `Seat ${item.bookedItemId} - ${format(item.dateBookedFrom, 'HH:mm')} - ${format(
          addMinutes(item.dateBookedFrom, bookingLength),
          'HH:mm'
        )}`;
  }

  if (item.isAllDay)
    return `Seat ${item.bookedItemId} - ${format(
      item.dateBookedFrom,
      "do 'of' MMMM yyyy"
    )} - All day`;

  return `Seat ${item.bookedItemId} - ${format(
    item.dateBookedFrom,
    "do 'of' MMMM yyyy HH:mm"
  )} - ${format(addMinutes(item.dateBookedFrom, bookingLength), 'HH:mm')}`;
};
