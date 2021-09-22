import React, { ReactElement } from "react";
import Head from "next/head";
import client from "../../apollo-client";
import { Office } from "../../types";
import { OfficeModal, OfficesTable } from "./components";
import { Layout, Button, PageTitle } from "../../components/ui";
import { useModalStore } from "../../stores";
import { getBuildings, getOffices } from "../../services/queries";
import { useMutation, useQuery } from "@apollo/client";
import { createOffice } from "../../services/mutations";

interface OfficesProps {
  offices: Office[];
}

export default function OfficesPage({ offices }: OfficesProps) {
  const openModal = useModalStore((state) => state.setIsOpen);
  const { data: buildingData } = useQuery(getBuildings);
  const [addOffice, { data, loading, error }] = useMutation(createOffice);

  return (
    <main className="px-8 py-2">
      <Head>
        <title>Seat Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>
        Offices
        <Button
          primary
          onClick={() =>
            openModal(true, {
              cancelText: "Cancel",
              confirmText: "Save",
              content: <OfficeModal />,
              data: { officeName: "", buildings: buildingData.buildings },
              title: "Add Office",
              onConfirmAction: (data) =>
                addOffice({
                  variables: {
                    name: data.officeName,
                    buildingId: parseInt(data.selectedBuilding.value),
                  },
                }),
            })
          }
        >
          Add new
        </Button>
      </PageTitle>
      <OfficesTable data={offices} />
    </main>
  );
}

OfficesPage.setLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: getOffices });
  return {
    props: {
      offices: data.offices,
    },
  };
}
