import React from "react";
import { Table } from "../../../components/ui";
import { OfficeManager } from "../../../types";
import { officeManagersColumnDef } from "./OfficeManagersColumnDef";

interface OfficeManagersTableProps {
  data: OfficeManager[];
}

export default function OfficeManagersTable({ data }: OfficeManagersTableProps) {
  const columnDef = React.useMemo(() => officeManagersColumnDef, []);
  const officesData = React.useMemo(() => data, []);

  if (!data) return null;

  return (
    <div>
      <Table
        columns={columnDef}
        data={officesData}
        fullWidth={true}
        rowStyles="mb-2"
        noDataText="No assigned managers..."
      />
    </div>
  );
}
