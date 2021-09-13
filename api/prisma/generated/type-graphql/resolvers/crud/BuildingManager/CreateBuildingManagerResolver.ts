import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateBuildingManagerArgs } from "./args/CreateBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class CreateBuildingManagerResolver {
  @TypeGraphQL.Mutation(_returns => BuildingManager, {
    nullable: false
  })
  async createBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBuildingManagerArgs): Promise<BuildingManager> {
    return getPrismaFromContext(ctx).buildingManager.create(args);
  }
}
