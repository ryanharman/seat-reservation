import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingOrderByInput } from "../../../inputs/BuildingOrderByInput";
import { BuildingScalarWhereWithAggregatesInput } from "../../../inputs/BuildingScalarWhereWithAggregatesInput";
import { BuildingWhereInput } from "../../../inputs/BuildingWhereInput";
import { BuildingScalarFieldEnum } from "../../../../enums/BuildingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingWhereInput, {
    nullable: true
  })
  where?: BuildingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BuildingOrderByInput], {
    nullable: true
  })
  orderBy?: BuildingOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BuildingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BuildingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
