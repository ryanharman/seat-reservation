import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateWithoutBuildingManagersInput } from "../inputs/BuildingCreateWithoutBuildingManagersInput";
import { BuildingUpdateWithoutBuildingManagersInput } from "../inputs/BuildingUpdateWithoutBuildingManagersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingUpsertWithoutBuildingManagersInput {
  @TypeGraphQL.Field(_type => BuildingUpdateWithoutBuildingManagersInput, {
    nullable: false
  })
  update!: BuildingUpdateWithoutBuildingManagersInput;

  @TypeGraphQL.Field(_type => BuildingCreateWithoutBuildingManagersInput, {
    nullable: false
  })
  create!: BuildingCreateWithoutBuildingManagersInput;
}
