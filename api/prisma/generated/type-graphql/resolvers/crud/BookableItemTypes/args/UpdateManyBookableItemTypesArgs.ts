import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesUpdateManyMutationInput } from "../../../inputs/BookableItemTypesUpdateManyMutationInput";
import { BookableItemTypesWhereInput } from "../../../inputs/BookableItemTypesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookableItemTypesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookableItemTypesWhereInput, {
    nullable: true
  })
  where?: BookableItemTypesWhereInput | undefined;
}
