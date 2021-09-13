import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemScalarWhereInput } from "../inputs/BookableItemScalarWhereInput";
import { BookableItemUpdateManyMutationInput } from "../inputs/BookableItemUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpdateManyWithWhereWithoutOfficeInput {
  @TypeGraphQL.Field(_type => BookableItemScalarWhereInput, {
    nullable: false
  })
  where!: BookableItemScalarWhereInput;

  @TypeGraphQL.Field(_type => BookableItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookableItemUpdateManyMutationInput;
}
