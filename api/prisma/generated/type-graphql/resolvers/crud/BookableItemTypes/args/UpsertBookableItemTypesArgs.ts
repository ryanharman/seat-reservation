import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesCreateInput } from "../../../inputs/BookableItemTypesCreateInput";
import { BookableItemTypesUpdateInput } from "../../../inputs/BookableItemTypesUpdateInput";
import { BookableItemTypesWhereUniqueInput } from "../../../inputs/BookableItemTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookableItemTypesCreateInput, {
    nullable: false
  })
  create!: BookableItemTypesCreateInput;

  @TypeGraphQL.Field(_type => BookableItemTypesUpdateInput, {
    nullable: false
  })
  update!: BookableItemTypesUpdateInput;
}
