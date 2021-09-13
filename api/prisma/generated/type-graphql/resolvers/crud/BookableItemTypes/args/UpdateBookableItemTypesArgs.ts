import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesUpdateInput } from "../../../inputs/BookableItemTypesUpdateInput";
import { BookableItemTypesWhereUniqueInput } from "../../../inputs/BookableItemTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesUpdateInput, {
    nullable: false
  })
  data!: BookableItemTypesUpdateInput;

  @TypeGraphQL.Field(_type => BookableItemTypesWhereUniqueInput, {
    nullable: false
  })
  where!: BookableItemTypesWhereUniqueInput;
}
