import { addMonths, addWeeks, isAfter, isSameMonth, subMonths, subWeeks } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../store';
import { setActiveDate, setCurrActiveTimes, setSelectedDate } from '../store/reducers/calendar';
import { getCalendar } from '../store/selectors/calendar';
import { OfficeActiveTimes } from '../types';

// We use this hook rather than the selector so that we can handle type conversion
export const useCalendar = () => {
  const dispatch = useAppDispatch();
  const { selectedDate, activeDate, currActiveTimes, currReservations, view } =
    useAppSelector(getCalendar);

  const handleDateSelection = (
    date: Date,
    onActiveDateChange?: (date: Date) => void,
    onSelectedDateChange?: (date: Date) => void
  ) => {
    const convertedActiveDate = new Date(activeDate);

    // both are helper functions to ensure that when the user passes a
    // callback to update the date on page level (if necessary) that it
    // gets invoked
    const selectedDateChange = (newSelectedDate: Date) => {
      const parsedDate = newSelectedDate.toISOString();
      if (onSelectedDateChange) onSelectedDateChange(newSelectedDate);
      dispatch(setSelectedDate(parsedDate));
    };
    const activeDateChange = (newActiveDate: Date) => {
      const parsedDate = newActiveDate.toISOString();
      if (onActiveDateChange) onActiveDateChange(newActiveDate);
      dispatch(setActiveDate(parsedDate));
    };

    // for the week view we dont need to account for the below logic
    if (view === 'week') {
      selectedDateChange(date);
      return;
    }

    // no need to change the active date as the selected date is not outside
    // of the current month
    if (isSameMonth(date, convertedActiveDate)) {
      selectedDateChange(date);
      return;
    }

    // need to change the active date as the selected date is outside
    // of the current month
    if (isAfter(date, convertedActiveDate)) {
      activeDateChange(
        view === 'month' ? addMonths(convertedActiveDate, 1) : addWeeks(convertedActiveDate, 1)
      );
      selectedDateChange(date);
    } else {
      activeDateChange(
        view === 'month' ? subMonths(convertedActiveDate, 1) : subWeeks(convertedActiveDate, 1)
      );
      selectedDateChange(date);
    }
  };

  const handleActiveDateChange = (newActiveDate: Date) => {
    const parsedDate = newActiveDate.toISOString();
    dispatch(setActiveDate(parsedDate));
  };

  const handleOfficeActiveTimes = (activeTimes: OfficeActiveTimes) => {
    const parsedStart = activeTimes.start;
    const parsedEnd = activeTimes.end;
    dispatch(setCurrActiveTimes({ start: parsedStart, end: parsedEnd }));
  };

  // TODO: Convert dates in the reservations to strings and vice versa

  return {
    selectedDate: new Date(selectedDate),
    activeDate: new Date(activeDate),
    currActiveTimes: { start: new Date(currActiveTimes.start), end: new Date(currActiveTimes.end) },
    currReservations,
    view,
    handleDateSelection,
    handleActiveDateChange,
    handleOfficeActiveTimes,
  };
};
