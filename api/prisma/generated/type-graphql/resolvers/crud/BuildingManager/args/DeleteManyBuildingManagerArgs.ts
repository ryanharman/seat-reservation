import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerWhereInput } from "../../../inputs/BuildingManagerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  where?: BuildingManagerWhereInput | undefined;
}
