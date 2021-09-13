import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBuildingManagerArgs } from "./args/FindUniqueBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class FindUniqueBuildingManagerResolver {
  @TypeGraphQL.Query(_returns => BuildingManager, {
    nullable: true
  })
  async buildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBuildingManagerArgs): Promise<BuildingManager | null> {
    return getPrismaFromContext(ctx).buildingManager.findUnique(args);
  }
}
