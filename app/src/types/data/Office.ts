import { OfficeManager } from '../';
import { OfficeActiveTimes } from './OfficeActiveTimes';

export type Office = {
  id: number;
  name: string;
  officeManagers: OfficeManager[];
  activeTimes: OfficeActiveTimes;
  bookingLength: number;
  createdAt: Date;
  updatedAt?: Date;
};
