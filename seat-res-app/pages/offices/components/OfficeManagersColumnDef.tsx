import React from "react";
import StyledLink from "../../../components/ui/StyledLink";
import client from "../../../apollo-client";
import { gql } from "@apollo/client";
import { format } from "date-fns";
import { Icon, UserIcon } from "../../../components/ui";

export const officeManagersColumnDef = [
  {
    id: "name",
    Cell: ({ row }: any) => {
      const { user } = row.original;
      const initials = user.firstName.slice(0, 1) + user.lastName.slice(0, 1);
      return (
        <StyledLink href={`/users/${user.id}`} as="/me" hideUnderline={true} className="flex gap-4 items-center">
          <UserIcon bgColor="bg-blue-500">{initials.toUpperCase()}</UserIcon>
          <div>
            <div className="font-semibold text-lg">{`${user.firstName} ${user.lastName}`}</div>
            <div className="text-xs text-gray-400">
              Assigned on {format(new Date(row.original.createdAt), "dd/MM/yyyy")}
            </div>
          </div>
        </StyledLink>
      );
    },
  },
  {
    id: "actions",
    Cell: ({ row }: any) => {
      const { original } = row;
      const deleteManager = async (id: number) => {
        await client.query({
          query: gql`
              deleteOfficeManager(where: { id: { id } }) {
                id
                officeId
                userId
              }
            `,
        });
      };
      return (
        <div className="justify-self-end">
          <Icon icon="bin" width={24} height={24} onClick={() => deleteManager(original.id)} />
        </div>
      );
    },
  },
];
