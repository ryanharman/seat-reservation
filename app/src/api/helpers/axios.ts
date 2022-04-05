import axios from 'axios';

type MethodTypes = 'get' | 'post' | 'put' | 'delete';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const axiosQuery = (
  method: MethodTypes = 'get',
  url: string,
  params?: Record<string, unknown>,
  data?: any,
  headers?: Record<string, unknown>
): any => {
  return axios(url, {
    method,
    data,
    baseURL: baseUrl,
    params,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};
