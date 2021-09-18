import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "../../../components/ui";

export const buildingsColumnDef = [
  {
    Header: "Building ID",
    accessor: "id",
  },
  {
    Header: "Building Name",
    accessor: "name",
  },
  {
    Header: "Date Created",
    accessor: "createdAt",
    Cell: ({ row }: any) => {
      const { original } = row;
      return <div>{format(new Date(original.createdAt), "dd-MM-yyyy HH:mm")}</div>;
    },
  },
  {
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
