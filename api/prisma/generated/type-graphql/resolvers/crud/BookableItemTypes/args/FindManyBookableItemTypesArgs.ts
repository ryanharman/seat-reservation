import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookableItemTypesOrderByInput } from "../../../inputs/BookableItemTypesOrderByInput";
import { BookableItemTypesWhereInput } from "../../../inputs/BookableItemTypesWhereInput";
import { BookableItemTypesWhereUniqueInput } from "../../../inputs/BookableItemTypesWhereUniqueInput";
import { BookableItemTypesScalarFieldEnum } from "../../../../enums/BookableItemTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBookableItemTypesArgs {
  @TypeGraphQL.Field(_type => BookableItemTypesWhereInput, {
    nullable: true
  })
  where?: BookableItemTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesOrderByInput], {
    nullable: true
  })
  orderBy?: BookableItemTypesOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookableItemTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createdAt" | "updatedAt"> | undefined;
}
