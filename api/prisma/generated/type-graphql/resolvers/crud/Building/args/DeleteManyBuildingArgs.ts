import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingWhereInput } from "../../../inputs/BuildingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingWhereInput, {
    nullable: true
  })
  where?: BuildingWhereInput | undefined;
}
