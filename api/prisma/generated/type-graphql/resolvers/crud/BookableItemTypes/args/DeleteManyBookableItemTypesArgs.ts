import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesWhereInput } from "../../../inputs/BookableItemTypesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereInput, {
    nullable: true
  })
  where?: BookableItemTypesWhereInput | undefined;
}
