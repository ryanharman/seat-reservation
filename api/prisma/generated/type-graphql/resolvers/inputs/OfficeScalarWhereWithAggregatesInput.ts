import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OfficeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OfficeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OfficeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OfficeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  buildingId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
