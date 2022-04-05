import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions
} from 'react-query';

import { axiosQuery } from './axios';

type ObjectOrArray = Record<string, unknown> | Record<string, unknown>[];

export type QueryOptions<ResT = any, ErrT = any> = Omit<
  UseQueryOptions<ResT, ErrT, any, any>,
  'queryKey' | 'queryFn'
>;
export type MutationOptions<ResT = any, ErrT = any, Body = ObjectOrArray> = Omit<
  UseMutationOptions<ResT, ErrT, Body>,
  'mutationFn'
>;

interface Key {
  URL_KEY: string;
  subRoute?: string;
}

export const useGet = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: QueryOptions<any, any>
) => {
  const { URL_KEY, subRoute } = key;
  const QUERY_KEY = subRoute ? [URL_KEY, subRoute] : [URL_KEY];

  return useQuery<Response, Error>(QUERY_KEY, {
    queryFn: () => axiosQuery('get', QUERY_KEY.join(''), params),
    select: options?.select ? options?.select : (data: any) => data.data,
    ...options,
  });
};

export const usePost = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: MutationOptions<Response, Error>
) => {
  const { URL_KEY, subRoute } = key;
  const QUERY_KEY = subRoute ? [URL_KEY, subRoute] : [URL_KEY];
  const queryClient = useQueryClient();

  const mutation = useMutation(QUERY_KEY, {
    mutationFn: (data) => axiosQuery('post', QUERY_KEY.join(''), params, data),
    onSuccess: () => queryClient.invalidateQueries(URL_KEY),
    ...options,
  });

  return {
    ...mutation,
    mutateAsync: <T extends ObjectOrArray>(data: T) => mutation.mutateAsync(data),
  };
};

export const usePut = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: MutationOptions<Response, Error>
) => {
  const { URL_KEY, subRoute } = key;
  const QUERY_KEY = subRoute ? [URL_KEY, subRoute] : [URL_KEY];
  const queryClient = useQueryClient();

  const mutation = useMutation(QUERY_KEY, {
    mutationFn: (data) => axiosQuery('put', QUERY_KEY.join(''), params, data),
    onSuccess: () => queryClient.invalidateQueries(URL_KEY),
    ...options,
  });

  return {
    ...mutation,
    mutateAsync: <T extends ObjectOrArray>(data: T) => mutation.mutateAsync(data),
  };
};

export const useDelete = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: MutationOptions<Response, Error, string | number>
) => {
  const { URL_KEY, subRoute } = key;
  const QUERY_KEY = subRoute ? [URL_KEY, subRoute] : [URL_KEY];
  const queryClient = useQueryClient();

  const mutation = useMutation(QUERY_KEY, {
    mutationFn: (id) => axiosQuery('delete', QUERY_KEY.join(''), { ...params, id }),
    onSuccess: () => queryClient.invalidateQueries(URL_KEY),
    ...options,
  });

  return {
    ...mutation,
    mutateAsync: <T extends string | number>(id: T) => mutation.mutateAsync(id),
  };
};
