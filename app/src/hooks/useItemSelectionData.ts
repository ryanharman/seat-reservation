import { useOfficeGet, useReservationGet, useReservationPut } from '../api';
import { useStore } from '../store';

export const useItemSelectionData = (officeId: string = '1') => {
  const { id: userId } = useStore((state) => state.user);
  const { data: reservations = [] } = useReservationGet({ userId });
  const { mutateAsync: createReservation } = useReservationPut();
  const { data: office } = useOfficeGet({ id: officeId });

  return {
    userId,
    reservations,
    createReservation,
    office,
  };
};
