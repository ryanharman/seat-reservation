import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingWhereUniqueInput } from "../../../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingWhereUniqueInput;
}
