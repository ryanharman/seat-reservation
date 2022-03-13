import { format } from 'date-fns';

import { Reservation } from '../types';

export const formatSelectionTimeDate = (item: Reservation, timeOnly?: boolean) => {
  if (timeOnly) {
    return item.isAllDay
      ? `${item.bookedItemType} ${item.bookedItemId} - All day`
      : `${item.bookedItemType} ${item.bookedItemId} - ${format(
          item.dateBookedFrom,
          'HH:mm'
        )} - ${format(item.dateBookedTo, 'HH:mm')}`;
  }

  if (item.isAllDay)
    return `${item.bookedItemType} ${item.bookedItemId} - ${format(
      item.dateBookedFrom,
      "do 'of' MMMM yyyy"
    )} - All day`;

  return `${item.bookedItemType} ${item.bookedItemId} - ${format(
    item.dateBookedFrom,
    "do 'of' MMMM yyyy HH:mm"
  )} - ${format(item.dateBookedTo, 'HH:mm')}`;
};
