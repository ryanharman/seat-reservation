import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookableItemArgs } from "./args/FindUniqueBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class FindUniqueBookableItemResolver {
  @TypeGraphQL.Query(_returns => BookableItem, {
    nullable: true
  })
  async bookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.findUnique(args);
  }
}
