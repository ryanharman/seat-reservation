import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BookableItemTypes } from "../models/BookableItemTypes";
import { Office } from "../models/Office";
import { Reservation } from "../models/Reservation";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class BookableItem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  office?: Office;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  officeId!: number;

  type?: BookableItemTypes;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  typeId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  available!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  reservations?: Reservation[];
}
