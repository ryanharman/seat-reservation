import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerWhereUniqueInput } from "../../../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingManagerWhereUniqueInput;
}
