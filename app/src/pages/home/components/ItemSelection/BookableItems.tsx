import { Badge, Col } from 'antd';
import { isPast } from 'date-fns';
import { differenceInHours } from 'date-fns/esm';

import { SelectedDate } from '../../../../store';
import { BookableItem } from '../../../../types';

interface BookableItemsMapProps {
  bookableItems: BookableItem[];
  userHasReservationOnSelectedDate: () => boolean;
  handleSelectedItemOnClick: (item: BookableItem) => void;
  selectedDate: SelectedDate;
}

export const BookableItemsMap = ({
  bookableItems,
  userHasReservationOnSelectedDate,
  handleSelectedItemOnClick,
  selectedDate,
}: BookableItemsMapProps) => {
  const isDateInThePast =
    isPast(selectedDate.dateFrom) && differenceInHours(new Date(), selectedDate.dateFrom) > 0;
  const canSelectDate = !userHasReservationOnSelectedDate() && !isDateInThePast;

  return (
    <>
      {bookableItems.map((item: BookableItem) => {
        return (
          <Col
            key={item.id}
            span={12}
            className={`transition-all py-2 px-3 ${
              canSelectDate
                ? 'hover:bg-slate-100 cursor-pointer '
                : 'text-gray-400 cursor-not-allowed'
            }`}
            onClick={() => canSelectDate && handleSelectedItemOnClick(item)}
          >
            <Badge color="green" /> {`${item.type} ${item.id}`}
          </Col>
        );
      })}
    </>
  );
};
