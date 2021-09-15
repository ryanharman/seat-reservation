import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerListRelationFilter } from "../inputs/BuildingManagerListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfficeListRelationFilter } from "../inputs/OfficeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingWhereInput {
  @TypeGraphQL.Field(_type => [BuildingWhereInput], {
    nullable: true
  })
  AND?: BuildingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingWhereInput], {
    nullable: true
  })
  OR?: BuildingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingWhereInput], {
    nullable: true
  })
  NOT?: BuildingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OfficeListRelationFilter, {
    nullable: true
  })
  offices?: OfficeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerListRelationFilter, {
    nullable: true
  })
  buildingManagers?: BuildingManagerListRelationFilter | undefined;
}
