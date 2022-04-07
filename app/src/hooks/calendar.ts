import { addMonths, isAfter, isSameMonth, subMonths } from 'date-fns';

import { useReservationGet } from '../api';
import { SelectedDate, useStore } from '../store';
import { OfficeActiveTimes } from '../types';

export const useCalendar = () => {
  const { selectedDate, activeDate, activeTimes, view, selectedItems } = useStore(
    (state) => state.calendar
  );
  const { setSelectedDate, setActiveDate, setActiveTimes, setSelectedItems, setView } = useStore();

  const { data: reservations = [] } = useReservationGet({ officeId: 1 }); // TODO: Fix officeId

  const handleDateSelection = (
    date: SelectedDate,
    onActiveDateChange?: (date: Date) => void,
    onSelectedDateChange?: (date: SelectedDate) => void
  ) => {
    // both are helper functions to ensure that when the user passes a
    // callback to update the date on page level (if necessary) that it
    // gets invoked
    const selectedDateChange = (newSelectedDate: SelectedDate) => {
      if (onSelectedDateChange) onSelectedDateChange(newSelectedDate);
      setSelectedDate(newSelectedDate);
    };
    const activeDateChange = (newActiveDate: Date) => {
      if (onActiveDateChange) onActiveDateChange(newActiveDate);
      setActiveDate(newActiveDate);
    };

    // no need to change the active date as the selected date is not outside
    // of the current month
    if (isSameMonth(date.dateFrom, activeDate) && view === 'month') {
      selectedDateChange(date);
      return;
    }

    if (isAfter(date.dateFrom, activeDate)) {
      activeDateChange(view === 'month' ? addMonths(activeDate, 1) : date.dateFrom);
      selectedDateChange(date);
    } else {
      activeDateChange(view === 'month' ? subMonths(activeDate, 1) : date.dateFrom);
      selectedDateChange(date);
    }
  };

  const handleActiveDateChange = (newActiveDate: Date) => {
    setActiveDate(newActiveDate);
  };

  const handleOfficeActiveTimes = (activeTimes: OfficeActiveTimes) => {
    setActiveTimes(activeTimes);
  };

  return {
    selectedDate,
    activeDate,
    currActiveTimes: { start: activeTimes.start, end: activeTimes.end },
    currReservations: reservations,
    view,
    setView,
    handleDateSelection,
    handleActiveDateChange,
    handleOfficeActiveTimes,
    selectedItems,
    setSelectedItems,
  };
};
