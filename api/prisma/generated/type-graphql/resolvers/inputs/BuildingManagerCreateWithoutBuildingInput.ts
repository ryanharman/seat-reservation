import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBuildingManagerInput } from "../inputs/UserCreateNestedOneWithoutBuildingManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerCreateWithoutBuildingInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBuildingManagerInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBuildingManagerInput;
}
