import { useBookableItemGet, useOfficeGet, useOfficeManagerGet, useReservationGet } from '../api';

export const useOfficePageData = (officeId: string = '1') => {
  const { data: office } = useOfficeGet({ id: officeId });
  const { data: reservations } = useReservationGet({ officeId }, { enabled: !!office });
  const { data: items } = useBookableItemGet({ officeId }, { enabled: !!office });
  const { data: managers } = useOfficeManagerGet({ officeId }, { enabled: !!office });

  return {
    office,
    reservations,
    items,
    managers,
  };
};
