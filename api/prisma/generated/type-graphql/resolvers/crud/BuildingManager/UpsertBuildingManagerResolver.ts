import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBuildingManagerArgs } from "./args/UpsertBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class UpsertBuildingManagerResolver {
  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: false
  })
  async upsertBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBuildingManagerArgs): Promise<BuildingManager> {
    return getPrismaFromContext(ctx).buildingManager.upsert(args);
  }
}
