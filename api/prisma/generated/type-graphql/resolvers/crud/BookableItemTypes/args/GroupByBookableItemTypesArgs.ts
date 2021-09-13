import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesOrderByInput } from "../../../inputs/BookableItemTypesOrderByInput";
import { BookableItemTypesScalarWhereWithAggregatesInput } from "../../../inputs/BookableItemTypesScalarWhereWithAggregatesInput";
import { BookableItemTypesWhereInput } from "../../../inputs/BookableItemTypesWhereInput";
import { BookableItemTypesScalarFieldEnum } from "../../../../enums/BookableItemTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereInput, {
    nullable: true
  })
  where?: BookableItemTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesOrderByInput], {
    nullable: true
  })
  orderBy?: BookableItemTypesOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BookableItemTypesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookableItemTypesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
