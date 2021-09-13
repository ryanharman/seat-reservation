import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingUpdateManyMutationInput } from "../../../inputs/BuildingUpdateManyMutationInput";
import { BuildingWhereInput } from "../../../inputs/BuildingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingUpdateManyMutationInput, {
    nullable: false
  })
  data!: BuildingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BuildingWhereInput, {
    nullable: true
  })
  where?: BuildingWhereInput | undefined;
}
