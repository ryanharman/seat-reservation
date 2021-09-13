import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemCreateInput } from "../../../inputs/BookableItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemCreateInput, {
    nullable: false
  })
  data!: BookableItemCreateInput;
}
