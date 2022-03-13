import { OfficeActiveTimes } from './OfficeActiveTimes';
import { Seat } from './Seat';
import { User } from './User';

export type Office = {
  id: number;
  name: string;
  officeManagers: User[];
  seats: Seat[];
  activeTimes: OfficeActiveTimes;
  bookingLength: number;
  createdAt: Date;
  updatedAt?: Date;
};
