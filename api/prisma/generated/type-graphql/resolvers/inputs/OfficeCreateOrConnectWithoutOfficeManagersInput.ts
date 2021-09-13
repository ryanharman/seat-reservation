import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateWithoutOfficeManagersInput } from "../inputs/OfficeCreateWithoutOfficeManagersInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateOrConnectWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeCreateWithoutOfficeManagersInput, {
    nullable: false
  })
  create!: OfficeCreateWithoutOfficeManagersInput;
}
