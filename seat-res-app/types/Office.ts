import { OfficeManager, Building } from ".";

export type Office = {
  id: number;
  building?: Building;
  name: string;
  officeManagers: OfficeManager[];
  createdAt: Date;
  updatedAt?: Date;
};
