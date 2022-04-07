import { EmptyObject, Reservation, SingleKey } from '../types';
import { convertAuditDates, createRoute, QueryOptions, useGet, usePost, usePut } from './helpers';

type ReservationParams = 'id' | 'userId' | 'bookedItemId' | 'officeId';
type UrlParams = { [key in ReservationParams]?: number | string };
type SingleUrlParameterOnly<T> = T extends EmptyObject ? UrlParams : SingleKey<T>;

const urls = {
  id: '/by-id',
  userId: '/by-user',
  bookedItemId: '/by-item',
  officeId: '/by-office',
};

const URL_KEY = 'reservation';

export const useReservationGet = <T extends UrlParams>(
  params?: SingleUrlParameterOnly<T>,
  options?: QueryOptions
) => {
  const subRoute = createRoute(params, urls);

  return useGet<keyof SingleUrlParameterOnly<T> extends 'id' ? Reservation : Reservation[], any>(
    { URL_KEY, subRoute },
    params,
    {
      ...options,
      select: (data) => convertReservationDates(data.data),
    }
  );
};

export const useReservationPost = () => {
  return usePost({ URL_KEY });
};

export const useReservationPut = () => {
  return usePut({ URL_KEY });
};

const convertReservationDates = (res: Reservation | Reservation[]) => {
  if (Array.isArray(res)) {
    return res.reduce(
      (acc, curr) => [
        ...acc,
        {
          ...curr,
          ...convertAuditDates(curr),
          dateBookedFrom: new Date(curr.dateBookedFrom),
          dateBookedTo: new Date(curr.dateBookedTo),
        },
      ],
      [] as Reservation[]
    );
  } else {
    return {
      ...res,
      ...convertAuditDates(res),
      dateBookedFrom: new Date(res.dateBookedFrom),
      dateBookedTo: new Date(res.dateBookedTo),
    };
  }
};
