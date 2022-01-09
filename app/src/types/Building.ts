import { Office } from ".";

export type Building = {
  id: number;
  name: string;
  offices?: Office[];
  createdAt?: Date;
  updatedAt?: Date;
};
