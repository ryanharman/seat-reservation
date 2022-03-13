import { Reservation } from '../';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  reservations: Reservation[] | [];
  createdAt: Date | string;
  updatedAt?: Date | string;
};
