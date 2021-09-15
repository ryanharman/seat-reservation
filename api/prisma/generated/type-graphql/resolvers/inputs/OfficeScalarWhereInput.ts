import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeScalarWhereInput {
  @TypeGraphQL.Field(_type => [OfficeScalarWhereInput], {
    nullable: true
  })
  AND?: OfficeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarWhereInput], {
    nullable: true
  })
  OR?: OfficeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarWhereInput], {
    nullable: true
  })
  NOT?: OfficeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
}
