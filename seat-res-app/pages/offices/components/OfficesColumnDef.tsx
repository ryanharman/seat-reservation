import React from "react";
import StyledLink from "../../../components/ui/StyledLink";
import { format } from "date-fns";
import { Icon } from "../../../components/ui";

export const officesColumnDef = [
  {
    Header: "Office ID",
    accessor: "id",
  },
  {
    Header: "Office Name",
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
  // {
  //   Header: () => null,
  //   id: "actions",
  //   Cell: ({ row }: any) => {
  //     const { original } = row;
  //     return (
  //       <div className="justify-self-end py-2">
  //         <StyledLink href={`offices/${original.id}`}>
  //           <Icon icon="expand" width={20} height={20} />
  //         </StyledLink>
  //       </div>
  //     );
  //   },
  // },
];
