import { useRouter } from "next/router";
import React from "react";
import { Row } from "react-table";
import { Table } from "../../../components/ui";
import { Office } from "../../../types";
import { officesColumnDef } from "./OfficesColumnDef";

interface OfficesTableProps {
  data: Office[];
}

export default function OfficesTable({ data }: OfficesTableProps) {
  const router = useRouter();
  const columnDef = React.useMemo(() => officesColumnDef, []);
  const officesData = React.useMemo(() => data, []);

  const rowOnClick = (row: Row) => {
    const { id } = row.values;
    router.push(`offices/${id}`);
  };

  return (
    <div>
      <Table
        columns={columnDef}
        data={officesData}
        fullWidth
        displayHeader
        rowOnClick={rowOnClick}
      />
    </div>
  );
}
