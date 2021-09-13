import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateOrConnectWithoutReservationsInput } from "../inputs/OfficeCreateOrConnectWithoutReservationsInput";
import { OfficeCreateWithoutReservationsInput } from "../inputs/OfficeCreateWithoutReservationsInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateNestedOneWithoutReservationsInput {
  @TypeGraphQL.Field(_type => OfficeCreateWithoutReservationsInput, {
    nullable: true
  })
  create?: OfficeCreateWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateOrConnectWithoutReservationsInput, {
    nullable: true
  })
  connectOrCreate?: OfficeCreateOrConnectWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: true
  })
  connect?: OfficeWhereUniqueInput | undefined;
}
