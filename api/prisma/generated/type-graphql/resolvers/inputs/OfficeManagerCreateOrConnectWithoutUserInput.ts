import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateWithoutUserInput } from "../inputs/OfficeManagerCreateWithoutUserInput";
import { OfficeManagerWhereUniqueInput } from "../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => OfficeManagerWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeManagerCreateWithoutUserInput, {
    nullable: false
  })
  create!: OfficeManagerCreateWithoutUserInput;
}
