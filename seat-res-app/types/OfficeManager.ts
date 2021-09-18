import { Office, User } from ".";

export type OfficeManager = {
  id: number;
  office: Office;
  user: User;
  createdAt: Date;
  updatedAt?: Date;
};
