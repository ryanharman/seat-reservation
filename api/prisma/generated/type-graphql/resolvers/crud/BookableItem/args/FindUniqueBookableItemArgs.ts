import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemWhereUniqueInput } from "../../../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemWhereUniqueInput;
}
