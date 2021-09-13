import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateWithoutOfficeManagersInput } from "../inputs/OfficeCreateWithoutOfficeManagersInput";
import { OfficeUpdateWithoutOfficeManagersInput } from "../inputs/OfficeUpdateWithoutOfficeManagersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpsertWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => OfficeUpdateWithoutOfficeManagersInput, {
    nullable: false
  })
  update!: OfficeUpdateWithoutOfficeManagersInput;

  @TypeGraphQL.Field(_type => OfficeCreateWithoutOfficeManagersInput, {
    nullable: false
  })
  create!: OfficeCreateWithoutOfficeManagersInput;
}
