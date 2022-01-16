import { OfficeManager } from '../';

export type Office = {
  id: number;
  name: string;
  officeManagers: OfficeManager[];
  createdAt: Date;
  updatedAt?: Date;
};
