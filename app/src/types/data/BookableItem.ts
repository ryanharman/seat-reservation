export interface BookableItem {
  id: number;
  type: string;
  label: string;
  availableForBooking: boolean;
  createdAt: Date;
  updatedAt: Date;
}
