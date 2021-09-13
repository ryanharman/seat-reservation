import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemUpdateInput } from "../../../inputs/BookableItemUpdateInput";
import { BookableItemWhereUniqueInput } from "../../../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemUpdateInput, {
    nullable: false
  })
  data!: BookableItemUpdateInput;

  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;
}
