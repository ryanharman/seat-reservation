import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateWithoutOfficeInput } from "../inputs/BookableItemCreateWithoutOfficeInput";
import { BookableItemUpdateWithoutOfficeInput } from "../inputs/BookableItemUpdateWithoutOfficeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpsertWithWhereUniqueWithoutOfficeInput {
  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemUpdateWithoutOfficeInput, {
    nullable: false
  })
  update!: BookableItemUpdateWithoutOfficeInput;

  @TypeGraphQL.Field(_type => BookableItemCreateWithoutOfficeInput, {
    nullable: false
  })
  create!: BookableItemCreateWithoutOfficeInput;
}
