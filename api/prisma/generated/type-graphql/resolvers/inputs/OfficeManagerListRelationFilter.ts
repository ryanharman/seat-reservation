import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerWhereInput } from "../inputs/OfficeManagerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerListRelationFilter {
  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  every?: OfficeManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  some?: OfficeManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  none?: OfficeManagerWhereInput | undefined;
}
