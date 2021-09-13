import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesCreateManyInput } from "../../../inputs/BookableItemTypesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => [BookableItemTypesCreateManyInput], {
    nullable: false
  })
  data!: BookableItemTypesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
