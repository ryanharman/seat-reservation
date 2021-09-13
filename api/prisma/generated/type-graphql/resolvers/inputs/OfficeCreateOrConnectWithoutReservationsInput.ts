import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateWithoutReservationsInput } from "../inputs/OfficeCreateWithoutReservationsInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateOrConnectWithoutReservationsInput {
  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeCreateWithoutReservationsInput, {
    nullable: false
  })
  create!: OfficeCreateWithoutReservationsInput;
}
