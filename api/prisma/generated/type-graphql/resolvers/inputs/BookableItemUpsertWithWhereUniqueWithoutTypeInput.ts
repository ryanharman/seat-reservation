import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateWithoutTypeInput } from "../inputs/BookableItemCreateWithoutTypeInput";
import { BookableItemUpdateWithoutTypeInput } from "../inputs/BookableItemUpdateWithoutTypeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: BookableItemUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => BookableItemCreateWithoutTypeInput, {
    nullable: false
  })
  create!: BookableItemCreateWithoutTypeInput;
}
