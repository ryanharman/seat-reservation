import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeOrderByInput } from "../../../inputs/OfficeOrderByInput";
import { OfficeScalarWhereWithAggregatesInput } from "../../../inputs/OfficeScalarWhereWithAggregatesInput";
import { OfficeWhereInput } from "../../../inputs/OfficeWhereInput";
import { OfficeScalarFieldEnum } from "../../../../enums/OfficeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  where?: OfficeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficeOrderByInput], {
    nullable: true
  })
  orderBy?: OfficeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "buildingId" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => OfficeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OfficeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
