import React from "react";
import { format } from "date-fns";
import { Icon } from "../../../components/ui";
import StyledLink from "../../../components/ui/StyledLink";

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
      return <div>{format(new Date(original.createdAt), "dd/MM/yyyy HH:mm")}</div>;
    },
  },
  {
    Header: () => null,
    id: "actions",
    Cell: ({ row }: any) => {
      const { original } = row;
      return (
        <div className="justify-self-end py-2">
          <StyledLink href={`buildings/${original.id}`}>
            <Icon icon="expand" width={20} height={20} />
          </StyledLink>
        </div>
      );
    },
  },
];
