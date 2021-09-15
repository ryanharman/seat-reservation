import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemOrderByInput } from "../../../inputs/BookableItemOrderByInput";
import { BookableItemScalarWhereWithAggregatesInput } from "../../../inputs/BookableItemScalarWhereWithAggregatesInput";
import { BookableItemWhereInput } from "../../../inputs/BookableItemWhereInput";
import { BookableItemScalarFieldEnum } from "../../../../enums/BookableItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookableItemArgs {
  @TypeGraphQL.Field(_type => BookableItemWhereInput, {
    nullable: true
  })
  where?: BookableItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookableItemOrderByInput], {
    nullable: true
  })
  orderBy?: BookableItemOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "officeId" | "typeId" | "name" | "officeExclusive" | "available" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BookableItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookableItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
