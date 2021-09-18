import React from "react";
import { Table } from "../../../components/ui";
import { Building } from "../../../types";
import { buildingsColumnDef } from "./BuildingsColumnDef";

interface BuildingsTable {
  data: Building[];
}

export default function BuildingsTable({ data }: IBuildingsTable) {
  const columnDef = React.useMemo(() => buildingsColumnDef, []);
  const buildingsData = React.useMemo(() => data, []);

  return (
    <div>
      <Table columns={columnDef} data={buildingsData} />
    </div>
  );
}
