import { OfficeManager } from '../';
import { OfficeActiveTimes } from './OfficeActiveTimes';
import { Seat } from './Seat';

export type Office = {
  id: number;
  name: string;
  officeManagers: OfficeManager[];
  seats: Seat[];
  activeTimes: OfficeActiveTimes;
  bookingLength: number;
  createdAt: Date;
  updatedAt?: Date;
};
