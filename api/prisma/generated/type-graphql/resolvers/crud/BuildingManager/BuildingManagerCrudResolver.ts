import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBuildingManagerArgs } from "./args/AggregateBuildingManagerArgs";
import { CreateBuildingManagerArgs } from "./args/CreateBuildingManagerArgs";
import { CreateManyBuildingManagerArgs } from "./args/CreateManyBuildingManagerArgs";
import { DeleteBuildingManagerArgs } from "./args/DeleteBuildingManagerArgs";
import { DeleteManyBuildingManagerArgs } from "./args/DeleteManyBuildingManagerArgs";
import { FindFirstBuildingManagerArgs } from "./args/FindFirstBuildingManagerArgs";
import { FindManyBuildingManagerArgs } from "./args/FindManyBuildingManagerArgs";
import { FindUniqueBuildingManagerArgs } from "./args/FindUniqueBuildingManagerArgs";
import { GroupByBuildingManagerArgs } from "./args/GroupByBuildingManagerArgs";
import { UpdateBuildingManagerArgs } from "./args/UpdateBuildingManagerArgs";
import { UpdateManyBuildingManagerArgs } from "./args/UpdateManyBuildingManagerArgs";
import { UpsertBuildingManagerArgs } from "./args/UpsertBuildingManagerArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BuildingManager } from "../../../models/BuildingManager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBuildingManager } from "../../outputs/AggregateBuildingManager";
import { BuildingManagerGroupBy } from "../../outputs/BuildingManagerGroupBy";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class BuildingManagerCrudResolver {
  @TypeGraphQL.Query(_returns => BuildingManager, {
    nullable: true
  })
  async buildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => BuildingManager, {
    nullable: true
  })
  async findFirstBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [BuildingManager], {
    nullable: false
  })
  async buildingManagers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBuildingManagerArgs): Promise<BuildingManager[]> {
    return getPrismaFromContext(ctx).buildingManager.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: false
  })
  async createBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBuildingManagerArgs): Promise<BuildingManager> {
    return getPrismaFromContext(ctx).buildingManager.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBuildingManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).buildingManager.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: true
  })
  async deleteBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: true
  })
  async updateBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBuildingManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).buildingManager.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBuildingManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).buildingManager.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: false
  })
  async upsertBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBuildingManagerArgs): Promise<BuildingManager> {
    return getPrismaFromContext(ctx).buildingManager.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateBuildingManager, {
    nullable: false
  })
  async aggregateBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBuildingManagerArgs): Promise<AggregateBuildingManager> {
    return getPrismaFromContext(ctx).buildingManager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [BuildingManagerGroupBy], {
    nullable: false
  })
  async groupByBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBuildingManagerArgs): Promise<BuildingManagerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).buildingManager.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
