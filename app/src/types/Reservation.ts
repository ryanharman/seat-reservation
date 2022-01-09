export type Reservation = {
  id: number;
  userId: number;
  bookedItemId: number;
  dateBookedFrom: Date;
  dateBookedTo: Date;
  cancelled: Boolean;
  createdAt: Date;
  updatedAt?: Date;
};
