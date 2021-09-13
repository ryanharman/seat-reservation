import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesWhereUniqueInput } from "../../../inputs/BookableItemTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemTypesWhereUniqueInput;
}
