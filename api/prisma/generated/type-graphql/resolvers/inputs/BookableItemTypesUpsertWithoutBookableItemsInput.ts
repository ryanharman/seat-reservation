import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesCreateWithoutBookableItemsInput } from "../inputs/BookableItemTypesCreateWithoutBookableItemsInput";
import { BookableItemTypesUpdateWithoutBookableItemsInput } from "../inputs/BookableItemTypesUpdateWithoutBookableItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesUpsertWithoutBookableItemsInput {
  @TypeGraphQL.Field(_type => BookableItemTypesUpdateWithoutBookableItemsInput, {
    nullable: false
  })
  update!: BookableItemTypesUpdateWithoutBookableItemsInput;

  @TypeGraphQL.Field(_type => BookableItemTypesCreateWithoutBookableItemsInput, {
    nullable: false
  })
  create!: BookableItemTypesCreateWithoutBookableItemsInput;
}
