import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyBuildingArgs } from "./args/FindManyBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class FindManyBuildingResolver {
  @TypeGraphQL.Query(_returns => [Building], {
    nullable: false
  })
  async buildings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBuildingArgs): Promise<Building[]> {
    return getPrismaFromContext(ctx).building.findMany(args);
  }
}
