import { Office } from '../';

export interface Seat {
  id: number;
  office: Office;
  type: string;
  availableForBooking: boolean;
  createdAt: Date;
  updatedAt: null;
}
