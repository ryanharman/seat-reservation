import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingCreateInput } from "../../../inputs/BuildingCreateInput";
import { BuildingUpdateInput } from "../../../inputs/BuildingUpdateInput";
import { BuildingWhereUniqueInput } from "../../../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BuildingCreateInput, {
    nullable: false
  })
  create!: BuildingCreateInput;

  @TypeGraphQL.Field(_type => BuildingUpdateInput, {
    nullable: false
  })
  update!: BuildingUpdateInput;
}
