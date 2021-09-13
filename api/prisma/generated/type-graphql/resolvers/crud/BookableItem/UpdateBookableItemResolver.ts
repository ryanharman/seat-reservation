import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateBookableItemArgs } from "./args/UpdateBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class UpdateBookableItemResolver {
  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: true
  })
  async updateBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.update(args);
  }
}
