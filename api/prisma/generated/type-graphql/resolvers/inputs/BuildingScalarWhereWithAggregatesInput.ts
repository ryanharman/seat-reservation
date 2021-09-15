import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BuildingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BuildingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BuildingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BuildingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
