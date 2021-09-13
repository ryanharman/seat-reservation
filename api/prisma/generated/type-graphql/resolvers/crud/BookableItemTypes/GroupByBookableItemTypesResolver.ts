import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBookableItemTypesArgs } from "./args/GroupByBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { BookableItemTypesGroupBy } from "../../outputs/BookableItemTypesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class GroupByBookableItemTypesResolver {
  @TypeGraphQL.Query(_returns => [BookableItemTypesGroupBy], {
    nullable: false
  })
  async groupByBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBookableItemTypesArgs): Promise<BookableItemTypesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookableItemTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
