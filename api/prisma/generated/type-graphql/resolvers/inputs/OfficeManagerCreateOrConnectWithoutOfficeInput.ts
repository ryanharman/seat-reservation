import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateWithoutOfficeInput } from "../inputs/OfficeManagerCreateWithoutOfficeInput";
import { OfficeManagerWhereUniqueInput } from "../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateOrConnectWithoutOfficeInput {
  @TypeGraphQL.Field(_type => OfficeManagerWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeManagerCreateWithoutOfficeInput, {
    nullable: false
  })
  create!: OfficeManagerCreateWithoutOfficeInput;
}
