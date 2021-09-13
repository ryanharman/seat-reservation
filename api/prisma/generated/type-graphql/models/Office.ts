import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BookableItem } from "../models/BookableItem";
import { Building } from "../models/Building";
import { OfficeManager } from "../models/OfficeManager";
import { Reservation } from "../models/Reservation";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Office {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  building?: Building;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  buildingId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  reservations?: Reservation[];

  bookableItems?: BookableItem[];

  officeManagers?: OfficeManager[];
}
