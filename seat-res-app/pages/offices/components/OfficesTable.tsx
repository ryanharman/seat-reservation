import React from "react";
import { Table } from "../../../components/ui";
import { Office } from "../../../types";
import { officesColumnDef } from "./OfficesColumnDef";

interface OfficesTableProps {
  data: Office[];
}

export default function OfficesTable({ data }: OfficesTableProps) {
  const columnDef = React.useMemo(() => officesColumnDef, []);
  const officesData = React.useMemo(() => data, []);

  return (
    <div>
      <Table columns={columnDef} data={officesData} fullWidth displayHeader />
    </div>
  );
}
