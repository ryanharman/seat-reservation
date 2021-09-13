import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerCreateInput } from "../../../inputs/BuildingManagerCreateInput";
import { BuildingManagerUpdateInput } from "../../../inputs/BuildingManagerUpdateInput";
import { BuildingManagerWhereUniqueInput } from "../../../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => BuildingManagerCreateInput, {
    nullable: false
  })
  create!: BuildingManagerCreateInput;

  @TypeGraphQL.Field(_type => BuildingManagerUpdateInput, {
    nullable: false
  })
  update!: BuildingManagerUpdateInput;
}
