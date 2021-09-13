import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerUpdateInput } from "../../../inputs/BuildingManagerUpdateInput";
import { BuildingManagerWhereUniqueInput } from "../../../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerUpdateInput, {
    nullable: false
  })
  data!: BuildingManagerUpdateInput;

  @TypeGraphQL.Field(_type => BuildingManagerWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingManagerWhereUniqueInput;
}
