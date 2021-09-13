import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateWithoutReservationsInput } from "../inputs/BookableItemCreateWithoutReservationsInput";
import { BookableItemUpdateWithoutReservationsInput } from "../inputs/BookableItemUpdateWithoutReservationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpsertWithoutReservationsInput {
  @TypeGraphQL.Field(_type => BookableItemUpdateWithoutReservationsInput, {
    nullable: false
  })
  update!: BookableItemUpdateWithoutReservationsInput;

  @TypeGraphQL.Field(_type => BookableItemCreateWithoutReservationsInput, {
    nullable: false
  })
  create!: BookableItemCreateWithoutReservationsInput;
}
