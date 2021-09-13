import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateWithoutBuildingInput } from "../inputs/BuildingManagerCreateWithoutBuildingInput";
import { BuildingManagerUpdateWithoutBuildingInput } from "../inputs/BuildingManagerUpdateWithoutBuildingInput";
import { BuildingManagerWhereUniqueInput } from "../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerUpsertWithWhereUniqueWithoutBuildingInput {
  @TypeGraphQL.Field(_type => BuildingManagerWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => BuildingManagerUpdateWithoutBuildingInput, {
    nullable: false
  })
  update!: BuildingManagerUpdateWithoutBuildingInput;

  @TypeGraphQL.Field(_type => BuildingManagerCreateWithoutBuildingInput, {
    nullable: false
  })
  create!: BuildingManagerCreateWithoutBuildingInput;
}
