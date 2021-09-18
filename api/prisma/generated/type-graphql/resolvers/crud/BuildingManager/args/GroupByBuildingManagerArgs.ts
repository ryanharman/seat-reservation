import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerOrderByInput } from "../../../inputs/BuildingManagerOrderByInput";
import { BuildingManagerScalarWhereWithAggregatesInput } from "../../../inputs/BuildingManagerScalarWhereWithAggregatesInput";
import { BuildingManagerWhereInput } from "../../../inputs/BuildingManagerWhereInput";
import { BuildingManagerScalarFieldEnum } from "../../../../enums/BuildingManagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  where?: BuildingManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerOrderByInput], {
    nullable: true
  })
  orderBy?: BuildingManagerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "buildingId" | "userId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BuildingManagerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BuildingManagerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
