import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateBuildingArgs } from "./args/CreateBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class CreateBuildingResolver {
  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: false
  })
  async createBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBuildingArgs): Promise<Building> {
    return getPrismaFromContext(ctx).building.create(args);
  }
}
