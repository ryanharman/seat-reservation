import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteBookableItemArgs } from "./args/DeleteBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class DeleteBookableItemResolver {
  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: true
  })
  async deleteBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.delete(args);
  }
}
