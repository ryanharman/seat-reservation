import { NextRouter } from "next/router";

export const refreshData = (router: NextRouter) => {
  router.replace(router.asPath);
};
