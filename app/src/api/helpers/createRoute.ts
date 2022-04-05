export const createRoute = <T>(params: T, urls: Record<string, string>) => {
  let subRoute: string;

  if (params) {
    const paramName = Object.keys(params)[0] as string;
    subRoute = urls[paramName];
    return subRoute;
  }

  return undefined;
};
