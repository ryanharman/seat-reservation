import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyBookableItemArgs } from "./args/FindManyBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class FindManyBookableItemResolver {
  @TypeGraphQL.Query(_returns => [BookableItem], {
    nullable: false
  })
  async bookableItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBookableItemArgs): Promise<BookableItem[]> {
    return getPrismaFromContext(ctx).bookableItem.findMany(args);
  }
}
