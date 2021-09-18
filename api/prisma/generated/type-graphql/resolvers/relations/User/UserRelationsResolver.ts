import * as TypeGraphQL from "type-graphql";
import { BuildingManager } from "../../../models/BuildingManager";
import { OfficeManager } from "../../../models/OfficeManager";
import { Reservation } from "../../../models/Reservation";
import { User } from "../../../models/User";
import { UserBuildingManagerArgs } from "./args/UserBuildingManagerArgs";
import { UserOfficeManagerArgs } from "./args/UserOfficeManagerArgs";
import { UserReservationsArgs } from "./args/UserReservationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Reservation], {
    nullable: false
  })
  async reservations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReservationsArgs): Promise<Reservation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).reservations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [OfficeManager], {
    nullable: false
  })
  async OfficeManager(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOfficeManagerArgs): Promise<OfficeManager[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).OfficeManager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BuildingManager], {
    nullable: false
  })
  async BuildingManager(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBuildingManagerArgs): Promise<BuildingManager[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).BuildingManager(args);
  }
}
