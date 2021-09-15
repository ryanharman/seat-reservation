import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemListRelationFilter } from "../inputs/BookableItemListRelationFilter";
import { BuildingRelationFilter } from "../inputs/BuildingRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfficeManagerListRelationFilter } from "../inputs/OfficeManagerListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeWhereInput {
  @TypeGraphQL.Field(_type => [OfficeWhereInput], {
    nullable: true
  })
  AND?: OfficeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereInput], {
    nullable: true
  })
  OR?: OfficeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereInput], {
    nullable: true
  })
  NOT?: OfficeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BuildingRelationFilter, {
    nullable: true
  })
  building?: BuildingRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  buildingId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookableItemListRelationFilter, {
    nullable: true
  })
  bookableItems?: BookableItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerListRelationFilter, {
    nullable: true
  })
  officeManagers?: OfficeManagerListRelationFilter | undefined;
}
