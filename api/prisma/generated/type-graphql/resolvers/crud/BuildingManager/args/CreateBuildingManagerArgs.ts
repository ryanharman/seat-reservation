import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerCreateInput } from "../../../inputs/BuildingManagerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerCreateInput, {
    nullable: false
  })
  data!: BuildingManagerCreateInput;
}
