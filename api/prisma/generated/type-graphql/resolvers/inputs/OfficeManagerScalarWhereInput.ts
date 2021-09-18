import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerScalarWhereInput {
  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereInput], {
    nullable: true
  })
  AND?: OfficeManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereInput], {
    nullable: true
  })
  OR?: OfficeManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereInput], {
    nullable: true
  })
  NOT?: OfficeManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  officeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;
}
