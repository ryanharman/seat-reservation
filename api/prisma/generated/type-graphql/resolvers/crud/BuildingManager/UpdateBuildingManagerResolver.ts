import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateBuildingManagerArgs } from "./args/UpdateBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class UpdateBuildingManagerResolver {
  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: true
  })
  async updateBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.update(args);
  }
}
