import { BookableItem } from './BookableItem';
import { OfficeActiveTimes } from './OfficeActiveTimes';
import { Reservation } from './Reservation';
import { User } from './User';

export type Office = {
  id: number;
  name: string;
  officeManagers: User[];
  bookableItems: BookableItem[];
  activeTimes: OfficeActiveTimes;
  bookingLength: number;
  reservations?: Reservation[] | [];
  createdAt: Date;
  updatedAt?: Date;
};
