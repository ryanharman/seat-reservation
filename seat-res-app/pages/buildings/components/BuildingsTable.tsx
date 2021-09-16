import React from "react";
import { Button } from "../../../components/ui";
import { Table } from "../../../components/ui/Table";

const BuildingsTable = () => {
  const exampleColumnDef = React.useMemo(
    () => [
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
              <Button primary={false} onClick={() => {}}>
                Go to {original.id}
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const exampleData = React.useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div>
      <Table columns={exampleColumnDef} data={exampleData} />
    </div>
  );
};

export default BuildingsTable;
