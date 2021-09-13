import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBuildingArgs } from "./args/UpsertBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class UpsertBuildingResolver {
  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: false
  })
  async upsertBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBuildingArgs): Promise<Building> {
    return getPrismaFromContext(ctx).building.upsert(args);
  }
}
