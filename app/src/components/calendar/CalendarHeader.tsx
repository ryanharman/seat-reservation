import React from 'react';
import Title from 'antd/lib/typography/Title';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { addMonths, addWeeks, format, subMonths, subWeeks } from 'date-fns';
import { Radio } from 'antd';
import { useCalendar } from './Context';

const CalendarHeader = () => {
  const { activeDate, setActiveDate, handleDateSelection, view, setView } = useCalendar();

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-baseline gap-4">
        <LeftOutlined
          className="text-2xl hover:text-blue-500 transition"
          onClick={() =>
            setActiveDate(view === 'month' ? subMonths(activeDate, 1) : subWeeks(activeDate, 1))
          }
        />
        <RightOutlined
          className="text-2xl hover:text-blue-500 transition"
          onClick={() =>
            setActiveDate(view === 'month' ? addMonths(activeDate, 1) : addWeeks(activeDate, 1))
          }
        />
        <Title level={4} className="flex gap-2">
          {format(activeDate, 'MMM yyyy')}
        </Title>
        <div
          className="transition cursor-pointer text-gray-500 hover:text-blue-500"
          onClick={() => {
            handleDateSelection(new Date());
          }}
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
