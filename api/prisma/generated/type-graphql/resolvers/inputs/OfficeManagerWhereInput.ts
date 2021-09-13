import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfficeRelationFilter } from "../inputs/OfficeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerWhereInput {
  @TypeGraphQL.Field(_type => [OfficeManagerWhereInput], {
    nullable: true
  })
  AND?: OfficeManagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereInput], {
    nullable: true
  })
  OR?: OfficeManagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereInput], {
    nullable: true
  })
  NOT?: OfficeManagerWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
