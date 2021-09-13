import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerUpdateManyMutationInput } from "../../../inputs/BuildingManagerUpdateManyMutationInput";
import { BuildingManagerWhereInput } from "../../../inputs/BuildingManagerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: BuildingManagerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  where?: BuildingManagerWhereInput | undefined;
}
