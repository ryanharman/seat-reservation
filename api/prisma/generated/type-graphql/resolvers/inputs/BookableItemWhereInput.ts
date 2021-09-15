import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesRelationFilter } from "../inputs/BookableItemTypesRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfficeRelationFilter } from "../inputs/OfficeRelationFilter";
import { ReservationListRelationFilter } from "../inputs/ReservationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemWhereInput {
  @TypeGraphQL.Field(_type => [BookableItemWhereInput], {
    nullable: true
  })
  AND?: BookableItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereInput], {
    nullable: true
  })
  OR?: BookableItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemWhereInput], {
    nullable: true
  })
  NOT?: BookableItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => OfficeRelationFilter, {
    nullable: true
  })
  office?: OfficeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  officeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesRelationFilter, {
    nullable: true
  })
  type?: BookableItemTypesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  typeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  officeExclusive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  available?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ReservationListRelationFilter, {
    nullable: true
  })
  reservations?: ReservationListRelationFilter | undefined;
}
