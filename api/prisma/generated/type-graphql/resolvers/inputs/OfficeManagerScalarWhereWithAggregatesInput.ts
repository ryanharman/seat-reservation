import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OfficeManagerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OfficeManagerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OfficeManagerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  officeId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
