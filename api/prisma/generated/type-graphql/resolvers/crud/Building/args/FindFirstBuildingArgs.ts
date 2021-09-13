import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingOrderByInput } from "../../../inputs/BuildingOrderByInput";
import { BuildingWhereInput } from "../../../inputs/BuildingWhereInput";
import { BuildingWhereUniqueInput } from "../../../inputs/BuildingWhereUniqueInput";
import { BuildingScalarFieldEnum } from "../../../../enums/BuildingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBuildingArgs {
  @TypeGraphQL.Field(_type => BuildingWhereInput, {
    nullable: true
  })
  where?: BuildingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BuildingOrderByInput], {
    nullable: true
  })
  orderBy?: BuildingOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: true
  })
  cursor?: BuildingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BuildingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createdAt" | "updatedAt"> | undefined;
}
