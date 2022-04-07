import { BookableItem, EmptyObject, SingleKey } from '../types';
import {
  convertResponseDates,
  createRoute,
  MutationOptions,
  QueryOptions,
  useDelete,
  useGet,
  useGetPost,
  usePost,
  usePut
} from './helpers';

type ItemParams = 'id' | 'typeId' | 'officeId'; //| ('typeId' & 'officeId');
type UrlParams = { [key in ItemParams]?: number | string };
type SingleUrlParameterOnly<T> = T extends EmptyObject ? UrlParams : SingleKey<T>;

const urls = {
  id: '/by-id',
  typeId: '/by-type',
  officeId: '/by-office',
  // typeAndOffice: '/by-type-and-office',
};

const URL_KEY = 'bookable-item';

export const useBookableItemGet = <T extends UrlParams>(
  params?: SingleUrlParameterOnly<T>,
  options?: QueryOptions
) => {
  const subRoute = createRoute(params, urls);

  return useGet<keyof SingleUrlParameterOnly<T> extends 'id' ? BookableItem : BookableItem[], any>(
    { URL_KEY, subRoute },
    params,
    {
      ...options,
      select: (data) => convertResponseDates(data.data),
    }
  );
};

interface AvailableItemsData {
  dateFrom: Date;
  dateTo: Date;
  officeId: number;
  isAllDay: 'true' | 'false';
}

export const useAvailableBookableItemsGet = <T extends UrlParams>(
  options?: QueryOptions,
  data?: AvailableItemsData
) => {
  return useGetPost<
    keyof SingleUrlParameterOnly<T> extends 'id' ? BookableItem : BookableItem[],
    any
  >(
    { URL_KEY, subRoute: '/available' },
    undefined,
    {
      ...options,
      select: (data) => convertResponseDates(data.data),
    },
    data
  );
};

export const useBookableItemPost = () => {
  return usePost({ URL_KEY });
};

export const useBookableItemPut = (options?: MutationOptions) => {
  return usePut({ URL_KEY }, undefined, options);
};

export const useBookableItemDelete = () => {
  return useDelete({ URL_KEY });
};
