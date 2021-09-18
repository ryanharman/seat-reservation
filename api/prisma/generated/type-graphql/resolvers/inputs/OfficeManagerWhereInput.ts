import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfficeRelationFilter } from "../inputs/OfficeRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

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
