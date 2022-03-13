// import { Office } from '../';

export interface BookableItem {
  id: number;
  // office: Office;
  type: string;
  availableForBooking: boolean;
  createdAt: Date;
  updatedAt: null;
}
