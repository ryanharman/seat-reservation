import { EmptyObject, OfficeManager, SingleKey } from '../types';
import {
  convertResponseDates,
  createRoute,
  QueryOptions,
  useDelete,
  useGet,
  usePost,
  usePut
} from './helpers';

type OfficeParams = 'id' | 'officeId';
type UrlParams = { [key in OfficeParams]?: number | string };
type SingleUrlParameterOnly<T> = T extends EmptyObject ? UrlParams : SingleKey<T>;

const urls = { id: '/by-id', officeId: '/by-office' };

const URL_KEY = 'office-manager';

export const useOfficeManagerGet = <T extends UrlParams>(
  params?: SingleUrlParameterOnly<T>,
  options?: QueryOptions
) => {
  const subRoute = createRoute(params, urls);

  return useGet<OfficeManager[], any>({ URL_KEY, subRoute }, params, {
    ...options,
    select: (data) => convertResponseDates(data.data),
  });
};

export const useOfficeManagerPost = () => {
  return usePost({ URL_KEY });
};

export const useOfficeManagerPut = () => {
  return usePut({ URL_KEY });
};

export const useOfficeManagerDelete = () => {
  return useDelete({ URL_KEY });
};
