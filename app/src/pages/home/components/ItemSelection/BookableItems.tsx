import { Badge, Col } from 'antd';

import { BookableItem } from '../../../../types';

interface BookableItemsMapProps {
  bookableItems: BookableItem[];
  userHasReservationOnSelectedDate: () => boolean;
  handleSelectedItemOnClick: (item: BookableItem) => void;
}

export const BookableItemsMap = ({
  bookableItems,
  userHasReservationOnSelectedDate,
  handleSelectedItemOnClick,
}: BookableItemsMapProps) => {
  return (
    <>
      {bookableItems.map((item: BookableItem) => {
        return (
          <Col
            key={item.id}
            span={12}
            className={`transition-all py-2 px-3 ${
              userHasReservationOnSelectedDate()
                ? 'text-gray-400 cursor-not-allowed'
                : 'hover:bg-slate-100 cursor-pointer'
            }`}
            onClick={() => !userHasReservationOnSelectedDate() && handleSelectedItemOnClick(item)}
          >
            <Badge color="green" /> {`${item.type} ${item.id}`}
          </Col>
        );
      })}
    </>
  );
};
