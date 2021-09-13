import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBuildingArgs } from "./args/FindFirstBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class FindFirstBuildingResolver {
  @TypeGraphQL.Query(_returns => Building, {
    nullable: true
  })
  async findFirstBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.findFirst(args);
  }
}
