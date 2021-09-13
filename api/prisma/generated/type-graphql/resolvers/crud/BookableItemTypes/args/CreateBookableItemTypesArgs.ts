import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesCreateInput } from "../../../inputs/BookableItemTypesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesCreateInput, {
    nullable: false
  })
  data!: BookableItemTypesCreateInput;
}
