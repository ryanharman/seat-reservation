import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions
} from 'react-query';

import { axiosQuery } from './axios';
import { createQueryKey } from './createQueryKey';

type ObjectOrArray = Record<string, unknown> | Record<string, unknown>[];

export type QueryOptions<ResT = any, ErrT = any> = Omit<
  UseQueryOptions<ResT, ErrT, any, any>,
  'queryKey' | 'queryFn'
>;
export type MutationOptions<ResT = any, ErrT = any, Body = ObjectOrArray> = Omit<
  UseMutationOptions<ResT, ErrT, Body>,
  'mutationFn'
>;

export interface Key {
  URL_KEY: string;
  subRoute?: string;
}

export const useGet = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: QueryOptions<any, any>
) => {
  const { URL, QUERY_KEY } = createQueryKey(key, params);

  return useQuery<Response, Error>(QUERY_KEY, {
    queryFn: () => axiosQuery('get', URL.join(''), params),
    select: options?.select ? options?.select : (data: any) => data.data,
    ...options,
  });
};

export const usePost = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: MutationOptions<Response, Error>
) => {
  const { URL_KEY } = key;
  const { URL, QUERY_KEY } = createQueryKey(key, params);
  const queryClient = useQueryClient();

  const mutation = useMutation(QUERY_KEY, {
    mutationFn: (data) => axiosQuery('post', URL.join(''), params, data),
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
  const { URL_KEY } = key;
  const { URL, QUERY_KEY } = createQueryKey(key, params);
  const queryClient = useQueryClient();

  const mutation = useMutation(QUERY_KEY, {
    mutationFn: (data) => axiosQuery('put', URL.join(''), params, data),
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
  const { URL_KEY } = key;
  const { URL, QUERY_KEY } = createQueryKey(key, params);
  const queryClient = useQueryClient();

  const mutation = useMutation(QUERY_KEY, {
    mutationFn: (id) => axiosQuery('delete', URL.join(''), { ...params, id }),
    onSuccess: () => queryClient.invalidateQueries(URL_KEY),
    ...options,
  });

  return {
    ...mutation,
    mutateAsync: <T extends string | number>(id: T) => mutation.mutateAsync(id),
  };
};

export const useGetPost = <Response, Error>(
  key: Key,
  params?: Record<string, unknown>,
  options?: QueryOptions<any, any>,
  data?: any
) => {
  const { URL, QUERY_KEY } = createQueryKey(key, { params, data });

  return useQuery<Response, Error>(QUERY_KEY, {
    queryFn: () => axiosQuery('post', URL.join(''), params, data),
    select: options?.select ? options?.select : (data: any) => data.data,
    ...options,
  });
};
