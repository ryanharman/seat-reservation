import React from "react";
import { format } from "date-fns";
import { Icon, UserIcon } from "../../../components/ui";
import StyledLink from "../../../components/ui/StyledLink";

export const officeManagersColumnDef = [
  {
    id: "name",
    Cell: ({ row }: any) => {
      console.log(row);
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
      // TODO: Onclick event
      const { original } = row;
      return (
        <div className="justify-self-end">
          <Icon icon="bin" width={24} height={24} />
        </div>
      );
    },
  },
];
