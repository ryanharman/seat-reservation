import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateWithoutTypeInput } from "../inputs/BookableItemCreateWithoutTypeInput";
import { BookableItemWhereUniqueInput } from "../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemCreateWithoutTypeInput, {
    nullable: false
  })
  create!: BookableItemCreateWithoutTypeInput;
}
