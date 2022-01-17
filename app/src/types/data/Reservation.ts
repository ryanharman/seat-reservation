export type Reservation = {
  id: number;
  userId: number;
  bookedItemId: number;
  officeId: number;
  dateBookedFrom: Date;
  dateBookedTo: Date;
  cancelled: Boolean;
  createdAt: Date;
  updatedAt?: Date;
  isAllDay: boolean;
};
