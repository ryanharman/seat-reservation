import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingUpdateInput } from "../../../inputs/BuildingUpdateInput";
import { BuildingWhereUniqueInput } from "../../../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingUpdateInput, {
    nullable: false
  })
  data!: BuildingUpdateInput;

  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingWhereUniqueInput;
}
