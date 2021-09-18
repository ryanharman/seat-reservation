import { Office } from "./Office";

export type Building = {
  id: number;
  name: string;
  offices?: Office[];
  createdAt?: Date;
  updatedAt?: Date;
};
