import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateWithoutUserInput } from "../inputs/ReservationCreateWithoutUserInput";
import { ReservationUpdateWithoutUserInput } from "../inputs/ReservationUpdateWithoutUserInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReservationWhereUniqueInput, {
    nullable: false
  })
  where!: ReservationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ReservationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReservationCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReservationCreateWithoutUserInput;
}
