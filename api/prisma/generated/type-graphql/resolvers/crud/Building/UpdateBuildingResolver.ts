import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateBuildingArgs } from "./args/UpdateBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class UpdateBuildingResolver {
  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: true
  })
  async updateBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.update(args);
  }
}
