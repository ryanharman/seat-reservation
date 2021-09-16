import React from "react";
import Link from "next/link";
import { Table, Button } from "../../../components/ui";

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
    Header: "Building Manager",
    accessor: "buildingManager",
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
    buildingManager: "Big A",
  },
  {
    id: 2,
    buildingName: "C1 Upper",
    buildingManager: "Jesus",
  },
  {
    id: 3,
    buildingName: "A1",
    buildingManager: "Simon Riden",
  },
];
