import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateWithoutReservationsInput } from "../inputs/OfficeCreateWithoutReservationsInput";
import { OfficeUpdateWithoutReservationsInput } from "../inputs/OfficeUpdateWithoutReservationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpsertWithoutReservationsInput {
  @TypeGraphQL.Field(_type => OfficeUpdateWithoutReservationsInput, {
    nullable: false
  })
  update!: OfficeUpdateWithoutReservationsInput;

  @TypeGraphQL.Field(_type => OfficeCreateWithoutReservationsInput, {
    nullable: false
  })
  create!: OfficeCreateWithoutReservationsInput;
}
