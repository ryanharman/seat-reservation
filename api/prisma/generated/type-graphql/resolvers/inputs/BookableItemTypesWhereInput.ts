import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemListRelationFilter } from "../inputs/BookableItemListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesWhereInput {
  @TypeGraphQL.Field(_type => [BookableItemTypesWhereInput], {
    nullable: true
  })
  AND?: BookableItemTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesWhereInput], {
    nullable: true
  })
  OR?: BookableItemTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesWhereInput], {
    nullable: true
  })
  NOT?: BookableItemTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BookableItemListRelationFilter, {
    nullable: true
  })
  bookableItems?: BookableItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
