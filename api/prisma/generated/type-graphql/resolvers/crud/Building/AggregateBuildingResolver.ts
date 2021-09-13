import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBuildingArgs } from "./args/AggregateBuildingArgs";
import { Building } from "../../../models/Building";
import { AggregateBuilding } from "../../outputs/AggregateBuilding";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class AggregateBuildingResolver {
  @TypeGraphQL.Query(_returns => AggregateBuilding, {
    nullable: false
  })
  async aggregateBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBuildingArgs): Promise<AggregateBuilding> {
    return getPrismaFromContext(ctx).building.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
