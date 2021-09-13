import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateWithoutBookedItemInput } from "../inputs/ReservationCreateWithoutBookedItemInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateOrConnectWithoutBookedItemInput {
  @TypeGraphQL.Field(_type => ReservationWhereUniqueInput, {
    nullable: false
  })
  where!: ReservationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservationCreateWithoutBookedItemInput, {
    nullable: false
  })
  create!: ReservationCreateWithoutBookedItemInput;
}
