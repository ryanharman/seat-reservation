import React from "react";
import { Table, Button } from "../../../components/ui";
import Link from "next/link";

export default function BuildingsTable() {
  const columnDef = React.useMemo(() => buildingsColumnDef, []);
  const testData = React.useMemo(() => buildingsTestData, []);

  return (
    <div>
      <Table columns={columnDef} data={testData} />
    </div>
  );
}

const buildingsColumnDef = [
  {
    Header: "Building",
    accessor: "buildingName",
  },
  {
    // EXAMPLE OF A CUSTOM CELL RENDER
    Header: () => null,
    id: "actions",
    Cell: ({ row }: any) => {
      const { original } = row;
      return (
        <div className="justify-self-end">
          <Link href={`buildings/${original.id}`}>
            <a>
              <Button onClick={() => {}}>Go to {original.id}</Button>
            </a>
          </Link>
        </div>
      );
    },
  },
];

const buildingsTestData = [
  {
    id: 1,
    buildingName: "C1 Lower",
  },
  {
    id: 2,
    buildingName: "C1 Upper",
  },
  {
    id: 3,
    buildingName: "A1",
  },
];
