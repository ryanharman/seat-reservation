import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOfficeArgs } from "./args/AggregateOfficeArgs";
import { CreateManyOfficeArgs } from "./args/CreateManyOfficeArgs";
import { CreateOfficeArgs } from "./args/CreateOfficeArgs";
import { DeleteManyOfficeArgs } from "./args/DeleteManyOfficeArgs";
import { DeleteOfficeArgs } from "./args/DeleteOfficeArgs";
import { FindFirstOfficeArgs } from "./args/FindFirstOfficeArgs";
import { FindManyOfficeArgs } from "./args/FindManyOfficeArgs";
import { FindUniqueOfficeArgs } from "./args/FindUniqueOfficeArgs";
import { GroupByOfficeArgs } from "./args/GroupByOfficeArgs";
import { UpdateManyOfficeArgs } from "./args/UpdateManyOfficeArgs";
import { UpdateOfficeArgs } from "./args/UpdateOfficeArgs";
import { UpsertOfficeArgs } from "./args/UpsertOfficeArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Office } from "../../../models/Office";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOffice } from "../../outputs/AggregateOffice";
import { OfficeGroupBy } from "../../outputs/OfficeGroupBy";

@TypeGraphQL.Resolver(_of => Office)
export class OfficeCrudResolver {
  @TypeGraphQL.Query(_returns => Office, {
    nullable: true
  })
  async office(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Office, {
    nullable: true
  })
  async findFirstOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Office], {
    nullable: false
  })
  async offices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOfficeArgs): Promise<Office[]> {
    return getPrismaFromContext(ctx).office.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: false
  })
  async createOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOfficeArgs): Promise<Office> {
    return getPrismaFromContext(ctx).office.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOfficeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).office.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: true
  })
  async deleteOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: true
  })
  async updateOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyOfficeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).office.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyOfficeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).office.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: false
  })
  async upsertOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOfficeArgs): Promise<Office> {
    return getPrismaFromContext(ctx).office.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateOffice, {
    nullable: false
  })
  async aggregateOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfficeArgs): Promise<AggregateOffice> {
    return getPrismaFromContext(ctx).office.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [OfficeGroupBy], {
    nullable: false
  })
  async groupByOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOfficeArgs): Promise<OfficeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).office.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
