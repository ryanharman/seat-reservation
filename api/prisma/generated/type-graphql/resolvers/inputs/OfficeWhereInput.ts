import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemListRelationFilter } from "../inputs/BookableItemListRelationFilter";
import { BuildingRelationFilter } from "../inputs/BuildingRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfficeManagerListRelationFilter } from "../inputs/OfficeManagerListRelationFilter";
import { ReservationListRelationFilter } from "../inputs/ReservationListRelationFilter";

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ReservationListRelationFilter, {
    nullable: true
  })
  reservations?: ReservationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookableItemListRelationFilter, {
    nullable: true
  })
  bookableItems?: BookableItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerListRelationFilter, {
    nullable: true
  })
  officeManagers?: OfficeManagerListRelationFilter | undefined;
}
