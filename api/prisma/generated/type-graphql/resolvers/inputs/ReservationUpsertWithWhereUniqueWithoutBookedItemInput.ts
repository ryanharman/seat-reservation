import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateWithoutBookedItemInput } from "../inputs/ReservationCreateWithoutBookedItemInput";
import { ReservationUpdateWithoutBookedItemInput } from "../inputs/ReservationUpdateWithoutBookedItemInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpsertWithWhereUniqueWithoutBookedItemInput {
  @TypeGraphQL.Field(_type => ReservationWhereUniqueInput, {
    nullable: false
  })
  where!: ReservationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservationUpdateWithoutBookedItemInput, {
    nullable: false
  })
  update!: ReservationUpdateWithoutBookedItemInput;

  @TypeGraphQL.Field(_type => ReservationCreateWithoutBookedItemInput, {
    nullable: false
  })
  create!: ReservationCreateWithoutBookedItemInput;
}
