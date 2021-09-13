import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookableItemArgs } from "./args/AggregateBookableItemArgs";
import { CreateBookableItemArgs } from "./args/CreateBookableItemArgs";
import { CreateManyBookableItemArgs } from "./args/CreateManyBookableItemArgs";
import { DeleteBookableItemArgs } from "./args/DeleteBookableItemArgs";
import { DeleteManyBookableItemArgs } from "./args/DeleteManyBookableItemArgs";
import { FindFirstBookableItemArgs } from "./args/FindFirstBookableItemArgs";
import { FindManyBookableItemArgs } from "./args/FindManyBookableItemArgs";
import { FindUniqueBookableItemArgs } from "./args/FindUniqueBookableItemArgs";
import { GroupByBookableItemArgs } from "./args/GroupByBookableItemArgs";
import { UpdateBookableItemArgs } from "./args/UpdateBookableItemArgs";
import { UpdateManyBookableItemArgs } from "./args/UpdateManyBookableItemArgs";
import { UpsertBookableItemArgs } from "./args/UpsertBookableItemArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BookableItem } from "../../../models/BookableItem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookableItem } from "../../outputs/AggregateBookableItem";
import { BookableItemGroupBy } from "../../outputs/BookableItemGroupBy";

@TypeGraphQL.Resolver(_of => BookableItem)
export class BookableItemCrudResolver {
  @TypeGraphQL.Query(_returns => BookableItem, {
    nullable: true
  })
  async bookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => BookableItem, {
    nullable: true
  })
  async findFirstBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [BookableItem], {
    nullable: false
  })
  async bookableItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBookableItemArgs): Promise<BookableItem[]> {
    return getPrismaFromContext(ctx).bookableItem.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: false
  })
  async createBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBookableItemArgs): Promise<BookableItem> {
    return getPrismaFromContext(ctx).bookableItem.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBookableItemArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItem.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: true
  })
  async deleteBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: true
  })
  async updateBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBookableItemArgs): Promise<BookableItem | null> {
    return getPrismaFromContext(ctx).bookableItem.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBookableItemArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItem.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBookableItemArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItem.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItem, {
    nullable: false
  })
  async upsertBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBookableItemArgs): Promise<BookableItem> {
    return getPrismaFromContext(ctx).bookableItem.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateBookableItem, {
    nullable: false
  })
  async aggregateBookableItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookableItemArgs): Promise<AggregateBookableItem> {
    return getPrismaFromContext(ctx).bookableItem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
