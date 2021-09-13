import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateBookableItemArgs } from "./args/CreateBookableItemArgs";
import { BookableItem } from "../../../models/BookableItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class CreateBookableItemResolver {
  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: false
  })
  async createBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBookableItemArgs): Promise<BookableItem> {
    return getPrismaFromContext(ctx).bookableItem.create(args);
  }
}
