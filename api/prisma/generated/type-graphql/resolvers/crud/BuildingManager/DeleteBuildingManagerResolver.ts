import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteBuildingManagerArgs } from "./args/DeleteBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class DeleteBuildingManagerResolver {
  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: true
  })
  async deleteBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.delete(args);
  }
}
