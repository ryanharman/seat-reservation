import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBuildingManagerInput } from "../inputs/UserCreateWithoutBuildingManagerInput";
import { UserUpdateWithoutBuildingManagerInput } from "../inputs/UserUpdateWithoutBuildingManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutBuildingManagerInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBuildingManagerInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBuildingManagerInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBuildingManagerInput, {
    nullable: false
  })
  create!: UserCreateWithoutBuildingManagerInput;
}
