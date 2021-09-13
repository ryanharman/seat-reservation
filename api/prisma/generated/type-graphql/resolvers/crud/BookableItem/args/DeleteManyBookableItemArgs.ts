import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemWhereInput } from "../../../inputs/BookableItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  where?: BookableItemWhereInput | undefined;
}
