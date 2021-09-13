import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesCreateWithoutBookableItemsInput } from "../inputs/BookableItemTypesCreateWithoutBookableItemsInput";
import { BookableItemTypesWhereUniqueInput } from "../inputs/BookableItemTypesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesCreateOrConnectWithoutBookableItemsInput {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemTypesCreateWithoutBookableItemsInput, {
    nullable: false
  })
  create!: BookableItemTypesCreateWithoutBookableItemsInput;
}
