import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateWithoutBuildingManagersInput } from "../inputs/BuildingCreateWithoutBuildingManagersInput";
import { BuildingWhereUniqueInput } from "../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingCreateOrConnectWithoutBuildingManagersInput {
  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BuildingCreateWithoutBuildingManagersInput, {
    nullable: false
  })
  create!: BuildingCreateWithoutBuildingManagersInput;
}
