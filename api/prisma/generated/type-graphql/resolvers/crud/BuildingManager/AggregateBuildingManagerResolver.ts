import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBuildingManagerArgs } from "./args/AggregateBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { AggregateBuildingManager } from "../../outputs/AggregateBuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class AggregateBuildingManagerResolver {
  @TypeGraphQL.Query(_returns => AggregateBuildingManager, {
    nullable: false
  })
  async aggregateBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBuildingManagerArgs): Promise<AggregateBuildingManager> {
    return getPrismaFromContext(ctx).buildingManager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
