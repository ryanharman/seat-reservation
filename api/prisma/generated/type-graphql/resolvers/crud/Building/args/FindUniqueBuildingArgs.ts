import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingWhereUniqueInput } from "../../../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingWhereUniqueInput;
}
