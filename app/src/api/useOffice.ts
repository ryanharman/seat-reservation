import { EmptyObject, Office, SingleKey } from '../types';
import {
  convertAuditDates,
  createRoute,
  QueryOptions,
  useDelete,
  useGet,
  usePost,
  usePut
} from './helpers';

type OfficeParams = 'id';
type UrlParams = { [key in OfficeParams]?: number | string };
type SingleUrlParameterOnly<T> = T extends EmptyObject ? UrlParams : SingleKey<T>;

const urls = { id: '/by-id' };

const URL_KEY = 'office';

export const useOfficeGet = <T extends UrlParams>(
  params?: SingleUrlParameterOnly<T>,
  options?: QueryOptions
) => {
  const subRoute = createRoute(params, urls);

  return useGet<keyof SingleUrlParameterOnly<T> extends 'id' ? Office : Office[], any>(
    { URL_KEY, subRoute },
    params,
    {
      ...options,
      select: (data) => convertActiveTimeDates(data.data),
    }
  );
};

export const useOfficePost = () => {
  return usePost({ URL_KEY });
};

export const useOfficePut = () => {
  return usePut({ URL_KEY });
};

export const useOfficeDelete = () => {
  return useDelete({ URL_KEY });
};

const convertActiveTimeDates = (office: Office | Office[]) => {
  if (Array.isArray(office)) {
    return office.reduce(
      (acc, curr) => [
        ...acc,
        {
          ...curr,
          ...convertAuditDates(curr),
          activeTimes: {
            start: new Date(curr.activeTimes.start),
            end: new Date(curr.activeTimes.end),
          },
        },
      ],
      [] as Office[]
    );
  } else {
    return {
      ...office,
      ...convertAuditDates(office),
      activeTimes: {
        start: new Date(office.activeTimes.start),
        end: new Date(office.activeTimes.end),
      },
    };
  }
};
