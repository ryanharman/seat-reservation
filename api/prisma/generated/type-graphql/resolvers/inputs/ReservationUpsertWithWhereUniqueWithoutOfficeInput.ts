import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateWithoutOfficeInput } from "../inputs/ReservationCreateWithoutOfficeInput";
import { ReservationUpdateWithoutOfficeInput } from "../inputs/ReservationUpdateWithoutOfficeInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpsertWithWhereUniqueWithoutOfficeInput {
  @TypeGraphQL.Field(_type => ReservationWhereUniqueInput, {
    nullable: false
  })
  where!: ReservationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservationUpdateWithoutOfficeInput, {
    nullable: false
  })
  update!: ReservationUpdateWithoutOfficeInput;

  @TypeGraphQL.Field(_type => ReservationCreateWithoutOfficeInput, {
    nullable: false
  })
  create!: ReservationCreateWithoutOfficeInput;
}
