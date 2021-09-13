import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteBuildingArgs } from "./args/DeleteBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class DeleteBuildingResolver {
  @TypeGraphQL.Mutation(_returns => Building, {
    nullable: true
  })
  async deleteBuilding(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.delete(args);
  }
}
