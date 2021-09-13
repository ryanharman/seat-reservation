import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemWhereInput } from "../inputs/BookableItemWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemRelationFilter {
  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  is?: BookableItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  isNot?: BookableItemWhereInput | undefined;
}
