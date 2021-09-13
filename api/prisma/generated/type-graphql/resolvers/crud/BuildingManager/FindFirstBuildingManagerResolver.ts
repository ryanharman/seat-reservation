import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBuildingManagerArgs } from "./args/FindFirstBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class FindFirstBuildingManagerResolver {
  @TypeGraphQL.Query(_returns => BuildingManager, {
    nullable: true
  })
  async findFirstBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.findFirst(args);
  }
}
