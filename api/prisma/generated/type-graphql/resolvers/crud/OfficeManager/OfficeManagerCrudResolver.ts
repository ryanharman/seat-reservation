import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOfficeManagerArgs } from "./args/AggregateOfficeManagerArgs";
import { CreateManyOfficeManagerArgs } from "./args/CreateManyOfficeManagerArgs";
import { CreateOfficeManagerArgs } from "./args/CreateOfficeManagerArgs";
import { DeleteManyOfficeManagerArgs } from "./args/DeleteManyOfficeManagerArgs";
import { DeleteOfficeManagerArgs } from "./args/DeleteOfficeManagerArgs";
import { FindFirstOfficeManagerArgs } from "./args/FindFirstOfficeManagerArgs";
import { FindManyOfficeManagerArgs } from "./args/FindManyOfficeManagerArgs";
import { FindUniqueOfficeManagerArgs } from "./args/FindUniqueOfficeManagerArgs";
import { GroupByOfficeManagerArgs } from "./args/GroupByOfficeManagerArgs";
import { UpdateManyOfficeManagerArgs } from "./args/UpdateManyOfficeManagerArgs";
import { UpdateOfficeManagerArgs } from "./args/UpdateOfficeManagerArgs";
import { UpsertOfficeManagerArgs } from "./args/UpsertOfficeManagerArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { OfficeManager } from "../../../models/OfficeManager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOfficeManager } from "../../outputs/AggregateOfficeManager";
import { OfficeManagerGroupBy } from "../../outputs/OfficeManagerGroupBy";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class OfficeManagerCrudResolver {
  @TypeGraphQL.Query(_returns => OfficeManager, {
    nullable: true
  })
  async officeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => OfficeManager, {
    nullable: true
  })
  async findFirstOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [OfficeManager], {
    nullable: false
  })
  async officeManagers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOfficeManagerArgs): Promise<OfficeManager[]> {
    return getPrismaFromContext(ctx).officeManager.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: false
  })
  async createOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOfficeManagerArgs): Promise<OfficeManager> {
    return getPrismaFromContext(ctx).officeManager.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOfficeManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).officeManager.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: true
  })
  async deleteOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: true
  })
  async updateOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyOfficeManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).officeManager.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyOfficeManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).officeManager.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: false
  })
  async upsertOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOfficeManagerArgs): Promise<OfficeManager> {
    return getPrismaFromContext(ctx).officeManager.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateOfficeManager, {
    nullable: false
  })
  async aggregateOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfficeManagerArgs): Promise<AggregateOfficeManager> {
    return getPrismaFromContext(ctx).officeManager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [OfficeManagerGroupBy], {
    nullable: false
  })
  async groupByOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOfficeManagerArgs): Promise<OfficeManagerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).officeManager.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
