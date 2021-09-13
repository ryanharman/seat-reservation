import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookableItemTypesArgs } from "./args/AggregateBookableItemTypesArgs";
import { CreateBookableItemTypesArgs } from "./args/CreateBookableItemTypesArgs";
import { CreateManyBookableItemTypesArgs } from "./args/CreateManyBookableItemTypesArgs";
import { DeleteBookableItemTypesArgs } from "./args/DeleteBookableItemTypesArgs";
import { DeleteManyBookableItemTypesArgs } from "./args/DeleteManyBookableItemTypesArgs";
import { FindFirstBookableItemTypesArgs } from "./args/FindFirstBookableItemTypesArgs";
import { FindManyBookableItemTypesArgs } from "./args/FindManyBookableItemTypesArgs";
import { FindUniqueBookableItemTypesArgs } from "./args/FindUniqueBookableItemTypesArgs";
import { GroupByBookableItemTypesArgs } from "./args/GroupByBookableItemTypesArgs";
import { UpdateBookableItemTypesArgs } from "./args/UpdateBookableItemTypesArgs";
import { UpdateManyBookableItemTypesArgs } from "./args/UpdateManyBookableItemTypesArgs";
import { UpsertBookableItemTypesArgs } from "./args/UpsertBookableItemTypesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookableItemTypes } from "../../outputs/AggregateBookableItemTypes";
import { BookableItemTypesGroupBy } from "../../outputs/BookableItemTypesGroupBy";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class BookableItemTypesCrudResolver {
  @TypeGraphQL.Query(_returns => BookableItemTypes, {
    nullable: true
  })
  async findUniqueBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => BookableItemTypes, {
    nullable: true
  })
  async findFirstBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [BookableItemTypes], {
    nullable: false
  })
  async findManyBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBookableItemTypesArgs): Promise<BookableItemTypes[]> {
    return getPrismaFromContext(ctx).bookableItemTypes.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: false
  })
  async createBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBookableItemTypesArgs): Promise<BookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItemTypes.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBookableItemTypesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItemTypes.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: true
  })
  async deleteBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: true
  })
  async updateBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBookableItemTypesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItemTypes.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBookableItemTypesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItemTypes.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: false
  })
  async upsertBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBookableItemTypesArgs): Promise<BookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItemTypes.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateBookableItemTypes, {
    nullable: false
  })
  async aggregateBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookableItemTypesArgs): Promise<AggregateBookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItemTypes.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
