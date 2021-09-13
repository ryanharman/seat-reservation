import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateWithoutReservationsInput } from "../inputs/BookableItemCreateWithoutReservationsInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateOrConnectWithoutReservationsInput {
  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemCreateWithoutReservationsInput, {
    nullable: false
  })
  create!: BookableItemCreateWithoutReservationsInput;
}
