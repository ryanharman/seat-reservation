import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyBuildingManagerArgs } from "./args/FindManyBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class FindManyBuildingManagerResolver {
  @TypeGraphQL.Query(_returns => [BuildingManager], {
    nullable: false
  })
  async buildingManagers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBuildingManagerArgs): Promise<BuildingManager[]> {
    return getPrismaFromContext(ctx).buildingManager.findMany(args);
  }
}
