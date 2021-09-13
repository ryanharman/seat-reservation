import * as TypeGraphQL from "type-graphql";
import { Building } from "../../../models/Building";
import { BuildingManager } from "../../../models/BuildingManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BuildingManager)
export class BuildingManagerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Building, {
    nullable: false
  })
  async building(@TypeGraphQL.Root() buildingManager: BuildingManager, @TypeGraphQL.Ctx() ctx: any): Promise<Building> {
    return getPrismaFromContext(ctx).buildingManager.findUnique({
      where: {
        id: buildingManager.id,
      },
    }).building({});
  }
}
