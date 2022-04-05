import { User } from './User';

export type OfficeManager = {
  id: number;
  officeId: number;
  userId: number;
  user: User;
  createdAt: Date | null;
  updatedAt: Date | null;
};
