import { BookableItem } from './BookableItem';
import { OfficeActiveTimes } from './OfficeActiveTimes';
import { User } from './User';

export type Office = {
  id: number;
  name: string;
  officeManagers: User[];
  bookableItems: BookableItem[];
  activeTimes: OfficeActiveTimes;
  bookingLength: number;
  createdAt: Date;
  updatedAt?: Date;
};
