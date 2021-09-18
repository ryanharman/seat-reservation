import Head from "next/head";
import React, { ReactElement } from "react";
import { Layout, PageTitle, ReportCard } from "../../components/ui";

export default function ReportsPage() {
  return (
    <main className="px-8 py-2">
      <Head>
        <title>Seat Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>Reports</PageTitle>
      <div className="grid grid-cols-2 gap-8">
        <ReportCard reportQty={255} reportSummary="Total Reservations Made" reportTitle="Reservations" />
        <ReportCard
          reportQty={13}
          reportSummary="Total Cancelled Reservatoins"
          reportTitle="Cancellations"
          bgColor="bg-blue-300"
        />
        <ReportCard reportQty={135} reportSummary="Total Check Ins" reportTitle="Check Ins" bgColor="bg-green-300" />
        <ReportCard
          reportQty={75}
          reportSummary="Total Hours Reserved"
          reportTitle="Hours Reserved"
          bgColor="bg-indigo-300"
        />
      </div>
    </main>
  );
}

ReportsPage.setLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
