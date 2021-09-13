import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemUpdateManyMutationInput } from "../../../inputs/BookableItemUpdateManyMutationInput";
import { BookableItemWhereInput } from "../../../inputs/BookableItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookableItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  where?: BookableItemWhereInput | undefined;
}
