import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateNestedManyWithoutTypeInput } from "../inputs/BookableItemCreateNestedManyWithoutTypeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  bookableItems?: BookableItemCreateNestedManyWithoutTypeInput | undefined;
}
