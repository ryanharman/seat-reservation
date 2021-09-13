import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBuildingArgs } from "./args/AggregateBuildingArgs";
import { CreateBuildingArgs } from "./args/CreateBuildingArgs";
import { CreateManyBuildingArgs } from "./args/CreateManyBuildingArgs";
import { DeleteBuildingArgs } from "./args/DeleteBuildingArgs";
import { DeleteManyBuildingArgs } from "./args/DeleteManyBuildingArgs";
import { FindFirstBuildingArgs } from "./args/FindFirstBuildingArgs";
import { FindManyBuildingArgs } from "./args/FindManyBuildingArgs";
import { FindUniqueBuildingArgs } from "./args/FindUniqueBuildingArgs";
import { GroupByBuildingArgs } from "./args/GroupByBuildingArgs";
import { UpdateBuildingArgs } from "./args/UpdateBuildingArgs";
import { UpdateManyBuildingArgs } from "./args/UpdateManyBuildingArgs";
import { UpsertBuildingArgs } from "./args/UpsertBuildingArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Building } from "../../../models/Building";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBuilding } from "../../outputs/AggregateBuilding";
import { BuildingGroupBy } from "../../outputs/BuildingGroupBy";

@TypeGraphQL.Resolver(_of => Building)
export class BuildingCrudResolver {
  @TypeGraphQL.Query(_returns => Building, {
    nullable: true
  })
  async building(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Building, {
    nullable: true
  })
  async findFirstBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Building], {
    nullable: false
  })
  async buildings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBuildingArgs): Promise<Building[]> {
    return getPrismaFromContext(ctx).building.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: false
  })
  async createBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBuildingArgs): Promise<Building> {
    return getPrismaFromContext(ctx).building.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBuildingArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).building.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: true
  })
  async deleteBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: true
  })
  async updateBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBuildingArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).building.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBuildingArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).building.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: false
  })
  async upsertBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBuildingArgs): Promise<Building> {
    return getPrismaFromContext(ctx).building.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateBuilding, {
    nullable: false
  })
  async aggregateBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBuildingArgs): Promise<AggregateBuilding> {
    return getPrismaFromContext(ctx).building.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [BuildingGroupBy], {
    nullable: false
  })
  async groupByBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBuildingArgs): Promise<BuildingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).building.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
