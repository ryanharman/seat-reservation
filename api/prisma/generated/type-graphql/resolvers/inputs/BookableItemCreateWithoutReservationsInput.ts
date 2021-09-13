import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesCreateNestedOneWithoutBookableItemsInput } from "../inputs/BookableItemTypesCreateNestedOneWithoutBookableItemsInput";
import { OfficeCreateNestedOneWithoutBookableItemsInput } from "../inputs/OfficeCreateNestedOneWithoutBookableItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateWithoutReservationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  available?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateNestedOneWithoutBookableItemsInput, {
    nullable: false
  })
  office!: OfficeCreateNestedOneWithoutBookableItemsInput;

  @TypeGraphQL.Field(_type => BookableItemTypesCreateNestedOneWithoutBookableItemsInput, {
    nullable: false
  })
  type!: BookableItemTypesCreateNestedOneWithoutBookableItemsInput;
}
