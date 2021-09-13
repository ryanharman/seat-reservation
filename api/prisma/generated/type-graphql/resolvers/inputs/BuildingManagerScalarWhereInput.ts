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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
