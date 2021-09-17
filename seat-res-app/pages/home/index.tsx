import React, { ReactElement } from "react";
import Head from "next/head";
import { Layout, PageTitle } from "../../components/ui";

export default function Home() {
  return (
    <main className="px-8 py-2">
      <Head>
        <title>Seat Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle margin="mb-2">Hello, Ryan</PageTitle>
      <div className="text-gray-400 text-sm">Welcome back to your dashboard!</div>
    </main>
  );
}

Home.setLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
