import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

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
