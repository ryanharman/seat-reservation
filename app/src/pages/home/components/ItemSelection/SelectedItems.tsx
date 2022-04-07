import { Badge, Row, Typography } from 'antd';
import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';

import { SelectedDate } from '../../../../store';
import { CalendarView, Reservation } from '../../../../types';
import { formatSelectionTimeDate } from '../../../../utils/formatSelectionDateTime';

const { Title, Text } = Typography;

interface SelectedItemsProps {
  selectedItems: Reservation[];
  handleDateSelection: (date: SelectedDate) => void;
  setView: (view: CalendarView) => void;
  removeItemFromSelected: (item: Reservation, e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const SelectedItems = ({
  selectedItems,
  handleDateSelection,
  setView,
  removeItemFromSelected,
}: SelectedItemsProps) => {
  return (
    <div>
      <Title level={5}>Your Selections</Title>
      {selectedItems.length === 0 ? (
        <Text italic>Selected items are displayed here</Text>
      ) : (
        selectedItems.map((item, idx) => (
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
        ))
      )}
    </div>
  );
};
