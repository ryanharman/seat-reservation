import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
