import * as TypeGraphQL from "type-graphql";
import { Building } from "../../../models/Building";
import { BuildingManager } from "../../../models/BuildingManager";
import { Office } from "../../../models/Office";
import { BuildingBuildingManagersArgs } from "./args/BuildingBuildingManagersArgs";
import { BuildingOfficesArgs } from "./args/BuildingOfficesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class BuildingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Office], {
    nullable: false
  })
  async offices(@TypeGraphQL.Root() building: Building, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BuildingOfficesArgs): Promise<Office[]> {
    return getPrismaFromContext(ctx).building.findUnique({
      where: {
        id: building.id,
      },
    }).offices(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BuildingManager], {
    nullable: false
  })
  async buildingManagers(@TypeGraphQL.Root() building: Building, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BuildingBuildingManagersArgs): Promise<BuildingManager[]> {
    return getPrismaFromContext(ctx).building.findUnique({
      where: {
        id: building.id,
      },
    }).buildingManagers(args);
  }
}
