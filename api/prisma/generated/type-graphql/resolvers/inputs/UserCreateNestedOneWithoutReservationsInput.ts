import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReservationsInput } from "../inputs/UserCreateOrConnectWithoutReservationsInput";
import { UserCreateWithoutReservationsInput } from "../inputs/UserCreateWithoutReservationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutReservationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReservationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReservationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
