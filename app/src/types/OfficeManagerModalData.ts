import { Office, User } from ".";

export type OfficeManagerModalData = {
  office: Office;
  selectedUser: { id: number; name: string };
  users: User[];
};
