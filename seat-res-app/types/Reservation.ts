import { User } from ".";

export type Reservation = {
  id: number;
  user: User;
  bookedItemId: number;
  dateBookedFrom: Date;
  dateBookedTo: Date;
  cancelled: Boolean;
  createdAt: Date;
  updatedAt?: Date;
};
