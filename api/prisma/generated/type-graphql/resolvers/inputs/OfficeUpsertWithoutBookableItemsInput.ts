import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateWithoutBookableItemsInput } from "../inputs/OfficeCreateWithoutBookableItemsInput";
import { OfficeUpdateWithoutBookableItemsInput } from "../inputs/OfficeUpdateWithoutBookableItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpsertWithoutBookableItemsInput {
  @TypeGraphQL.Field(_type => OfficeUpdateWithoutBookableItemsInput, {
    nullable: false
  })
  update!: OfficeUpdateWithoutBookableItemsInput;

  @TypeGraphQL.Field(_type => OfficeCreateWithoutBookableItemsInput, {
    nullable: false
  })
  create!: OfficeCreateWithoutBookableItemsInput;
}
