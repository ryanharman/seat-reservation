import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOfficeManagerInput } from "../inputs/UserCreateWithoutOfficeManagerInput";
import { UserUpdateWithoutOfficeManagerInput } from "../inputs/UserUpdateWithoutOfficeManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutOfficeManagerInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOfficeManagerInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOfficeManagerInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOfficeManagerInput, {
    nullable: false
  })
  create!: UserCreateWithoutOfficeManagerInput;
}
