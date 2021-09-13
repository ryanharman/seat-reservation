import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBuildingManagerArgs } from "./args/DeleteManyBuildingManagerArgs";
import { BuildingManager } from "../../../models/BuildingManager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class DeleteManyBuildingManagerResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBuildingManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBuildingManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).buildingManager.deleteMany(args);
  }
}
