import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBookableItemArgs } from "./args/FindFirstBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class FindFirstBookableItemResolver {
  @TypeGraphQL.Query(_returns => BookableItem, {
    nullable: true
  })
  async findFirstBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.findFirst(args);
  }
}
