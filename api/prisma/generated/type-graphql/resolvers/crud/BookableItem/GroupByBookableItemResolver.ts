import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBookableItemArgs } from "./args/GroupByBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { BookableItemGroupBy } from "../../outputs/BookableItemGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class GroupByBookableItemResolver {
  @TypeGraphQL.Query(_returns => [BookableItemGroupBy], {
    nullable: false
  })
  async groupByBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBookableItemArgs): Promise<BookableItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookableItem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
