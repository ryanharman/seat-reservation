import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReservationsInput } from "../inputs/UserCreateOrConnectWithoutReservationsInput";
import { UserCreateWithoutReservationsInput } from "../inputs/UserCreateWithoutReservationsInput";
import { UserUpdateWithoutReservationsInput } from "../inputs/UserUpdateWithoutReservationsInput";
import { UserUpsertWithoutReservationsInput } from "../inputs/UserUpsertWithoutReservationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReservationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReservationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReservationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReservationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReservationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReservationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReservationsInput | undefined;
}
