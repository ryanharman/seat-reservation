import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeOrderByInput } from "../../../inputs/OfficeOrderByInput";
import { OfficeWhereInput } from "../../../inputs/OfficeWhereInput";
import { OfficeWhereUniqueInput } from "../../../inputs/OfficeWhereUniqueInput";
import { OfficeScalarFieldEnum } from "../../../../enums/OfficeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class BuildingOfficesArgs {
  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  where?: OfficeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficeOrderByInput], {
    nullable: true
  })
  orderBy?: OfficeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfficeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "buildingId" | "createdAt" | "updatedAt"> | undefined;
}
