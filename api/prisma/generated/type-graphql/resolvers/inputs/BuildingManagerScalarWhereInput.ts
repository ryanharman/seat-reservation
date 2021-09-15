import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerScalarWhereInput {
  @TypeGraphQL.Field(_type => [BuildingManagerScalarWhereInput], {
    nullable: true
  })
  AND?: BuildingManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerScalarWhereInput], {
    nullable: true
  })
  OR?: BuildingManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerScalarWhereInput], {
    nullable: true
  })
  NOT?: BuildingManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  buildingId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;
}
