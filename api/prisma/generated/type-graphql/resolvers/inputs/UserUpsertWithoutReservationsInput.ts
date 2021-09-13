import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReservationsInput } from "../inputs/UserCreateWithoutReservationsInput";
import { UserUpdateWithoutReservationsInput } from "../inputs/UserUpdateWithoutReservationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutReservationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReservationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReservationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReservationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReservationsInput;
}
