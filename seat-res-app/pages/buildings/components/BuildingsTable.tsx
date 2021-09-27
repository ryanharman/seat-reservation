import React from "react";
import { useRouter } from "next/router";
import { Table } from "../../../components/ui";
import { Building } from "../../../types";
import { buildingsColumnDef } from "./BuildingsColumnDef";
import { Row } from "react-table";

interface BuildingsTableProps {
  data: Building[];
}

export default function BuildingsTable({ data }: BuildingsTableProps) {
  const router = useRouter();
  const columnDef = React.useMemo(() => buildingsColumnDef, []);
  const buildingsData = React.useMemo(() => data, []);

  const rowOnClick = (row: Row) => {
    const { id } = row.values;
    router.push(`buildings/${id}`);
  };

  return (
    <div>
      <Table
        columns={columnDef}
        data={buildingsData}
        fullWidth
        displayHeader
        rowOnClick={rowOnClick}
      />
    </div>
  );
}
