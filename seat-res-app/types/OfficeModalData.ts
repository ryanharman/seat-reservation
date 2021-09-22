import { Building } from ".";

export type OfficeModalData = {
  officeName: string;
  selectedBuilding: { id: number; name: string };
  buildings: Building[];
};
