import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemOrderByInput } from "../../../inputs/BookableItemOrderByInput";
import { BookableItemWhereInput } from "../../../inputs/BookableItemWhereInput";
import { BookableItemWhereUniqueInput } from "../../../inputs/BookableItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  where?: BookableItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookableItemOrderByInput], {
    nullable: true
  })
  orderBy?: BookableItemOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BookableItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookableItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
