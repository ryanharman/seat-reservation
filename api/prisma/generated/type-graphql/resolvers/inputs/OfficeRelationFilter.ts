import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeWhereInput } from "../inputs/OfficeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeRelationFilter {
  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  is?: OfficeWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  isNot?: OfficeWhereInput | undefined;
}
