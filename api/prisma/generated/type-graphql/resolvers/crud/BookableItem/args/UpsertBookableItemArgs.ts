import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemCreateInput } from "../../../inputs/BookableItemCreateInput";
import { BookableItemUpdateInput } from "../../../inputs/BookableItemUpdateInput";
import { BookableItemWhereUniqueInput } from "../../../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemCreateInput, {
    nullable: false
  })
  create!: BookableItemCreateInput;

  @TypeGraphQL.Field(_type => BookableItemUpdateInput, {
    nullable: false
  })
  update!: BookableItemUpdateInput;
}
