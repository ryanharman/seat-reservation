import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookableItemArgs } from "./args/AggregateBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { AggregateBookableItem } from "../../outputs/AggregateBookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class AggregateBookableItemResolver {
  @TypeGraphQL.Query(_returns => AggregateBookableItem, {
    nullable: false
  })
  async aggregateBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookableItemArgs): Promise<AggregateBookableItem> {
    return getPrismaFromContext(ctx).bookableItem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
