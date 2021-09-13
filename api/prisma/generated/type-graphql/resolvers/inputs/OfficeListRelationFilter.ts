import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeWhereInput } from "../inputs/OfficeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeListRelationFilter {
  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  every?: OfficeWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  some?: OfficeWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  none?: OfficeWhereInput | undefined;
}
