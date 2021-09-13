import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingCreateInput } from "../../../inputs/BuildingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingCreateInput, {
    nullable: false
  })
  data!: BuildingCreateInput;
}
