import React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  setLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const setLayout = Component.setLayout ?? ((page) => page);

  return setLayout(<Component {...pageProps} />);
}
