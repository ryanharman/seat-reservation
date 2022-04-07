import { Key } from './useQueries';

export const createQueryKey = (
  { URL_KEY, subRoute }: Key,
  params?: Record<string, unknown>
): { URL: string[]; QUERY_KEY: string[] } => {
  const QUERY_KEY: any = [URL_KEY];
  subRoute && QUERY_KEY.push(subRoute);
  params && QUERY_KEY.push(params);

  return { URL: QUERY_KEY.slice(0, 2), QUERY_KEY };
};
