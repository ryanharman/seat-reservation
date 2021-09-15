import Head from "next/head";
import React, { ReactElement } from "react";
import { Button, Card, PageTitle } from "../../components/ui";
import Layout from "../../components/ui/Layout";

export default function Offices() {
  return (
    <main className="px-8 py-2">
      <Head>
        <title>Seat Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle margin="mb-8">
        Offices
        <Button primary onClick={() => {}}>
          Add new
        </Button>
      </PageTitle>
      <Card>
        <div className="flex justify-between text-5xl">
          <div>📈</div>|<div>📊</div>|<div>💹</div>
        </div>
      </Card>
    </main>
  );
}

Offices.setLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
