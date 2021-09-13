import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BuildingManagerOrderByInput } from "../../../inputs/BuildingManagerOrderByInput";
import { BuildingManagerWhereInput } from "../../../inputs/BuildingManagerWhereInput";
import { BuildingManagerWhereUniqueInput } from "../../../inputs/BuildingManagerWhereUniqueInput";
import { BuildingManagerScalarFieldEnum } from "../../../../enums/BuildingManagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBuildingManagerArgs {
  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  where?: BuildingManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerOrderByInput], {
    nullable: true
  })
  orderBy?: BuildingManagerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerWhereUniqueInput, {
    nullable: true
  })
  cursor?: BuildingManagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "buildingId" | "name" | "createdAt" | "updatedAt"> | undefined;
}
