import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemWhereInput } from "../inputs/BookableItemWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemListRelationFilter {
  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  every?: BookableItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  some?: BookableItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  none?: BookableItemWhereInput | undefined;
}
