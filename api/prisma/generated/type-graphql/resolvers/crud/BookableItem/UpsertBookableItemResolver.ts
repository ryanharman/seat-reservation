import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBookableItemArgs } from "./args/UpsertBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class UpsertBookableItemResolver {
  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: false
  })
  async upsertBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBookableItemArgs): Promise<BookableItem> {
    return getPrismaFromContext(ctx).bookableItem.upsert(args);
  }
}
