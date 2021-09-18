import { Building } from "./Building";

export type Office = {
  id: number;
  building?: Building;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};
