import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationUpdateWithoutUserInput } from "../inputs/ReservationUpdateWithoutUserInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReservationWhereUniqueInput, {
    nullable: false
  })
  where!: ReservationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ReservationUpdateWithoutUserInput;
}
