import { Radio, Typography } from 'antd';
import { addMonths, addWeeks, endOfWeek, format, startOfWeek, subMonths, subWeeks } from 'date-fns';
import React from 'react';

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import { useCalendar } from '../../hooks/calendar';
import { useStore } from '../../store';

const { Title } = Typography;

const CalendarHeader = () => {
  const { activeDate, view, handleActiveDateChange, handleDateSelection } = useCalendar();
  const setView = useStore((state) => state.setView);

  const startOfWeekFormatted = format(startOfWeek(activeDate, { weekStartsOn: 1 }), 'MMM do');
  const endOfWeekFormatted = format(endOfWeek(activeDate, { weekStartsOn: 1 }), 'do');

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-baseline gap-4">
        <div className="flex gap-2">
          <LeftCircleOutlined
            className="text-2xl hover:text-blue-500 transition"
            onClick={() =>
              handleActiveDateChange(
                view === 'month' ? subMonths(activeDate, 1) : subWeeks(activeDate, 1)
              )
            }
          />
          <RightCircleOutlined
            className="text-2xl hover:text-blue-500 transition"
            onClick={() =>
              handleActiveDateChange(
                view === 'month' ? addMonths(activeDate, 1) : addWeeks(activeDate, 1)
              )
            }
          />
        </div>
        <Title level={4} className="flex gap-2">
          {view === 'week' && `${startOfWeekFormatted} - ${endOfWeekFormatted}`}
          {view === 'month' && format(activeDate, 'MMM yyyy')}
        </Title>
        <div
          className="transition cursor-pointer text-gray-500 hover:text-blue-500"
          // TODO: Refine how this works for week
          onClick={() => handleDateSelection({ dateFrom: new Date(), dateTo: new Date() })}
        >
          Today
        </div>
      </div>
      <Radio.Group value={view} onChange={(e) => setView(e.target.value)}>
        <Radio.Button value="month">Month</Radio.Button>
        <Radio.Button value="week">Week</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default CalendarHeader;
