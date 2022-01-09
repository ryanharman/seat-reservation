import { Building, User } from ".";

export type BuildingManager = {
  id: number;
  building: Building;
  user: User;
  createdAt: Date;
  updatedAt?: Date;
};
