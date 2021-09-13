import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemCreateManyInput } from "../../../inputs/BookableItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookableItemArgs {
  @TypeGraphQL.Field(_type => [BookableItemCreateManyInput], {
    nullable: false
  })
  data!: BookableItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
