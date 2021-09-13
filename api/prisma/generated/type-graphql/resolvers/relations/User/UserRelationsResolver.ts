import * as TypeGraphQL from "type-graphql";
import { Reservation } from "../../../models/Reservation";
import { User } from "../../../models/User";
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
}
