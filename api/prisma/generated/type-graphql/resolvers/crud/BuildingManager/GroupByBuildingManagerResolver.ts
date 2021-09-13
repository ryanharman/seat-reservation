import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBuildingManagerArgs } from "./args/GroupByBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { BuildingManagerGroupBy } from "../../outputs/BuildingManagerGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class GroupByBuildingManagerResolver {
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
