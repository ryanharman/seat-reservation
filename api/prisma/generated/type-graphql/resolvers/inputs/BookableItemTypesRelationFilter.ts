import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesWhereInput } from "../inputs/BookableItemTypesWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesRelationFilter {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereInput, {
    nullable: true
  })
  is?: BookableItemTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesWhereInput, {
    nullable: true
  })
  isNot?: BookableItemTypesWhereInput | undefined;
}
