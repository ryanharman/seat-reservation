import * as TypeGraphQL from "type-graphql";
import { BookableItem } from "../../../models/BookableItem";
import { Reservation } from "../../../models/Reservation";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reservation)
export class ReservationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() reservation: Reservation, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).reservation.findUnique({
      where: {
        id: reservation.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => BookableItem, {
    nullable: false
  })
  async bookedItem(@TypeGraphQL.Root() reservation: Reservation, @TypeGraphQL.Ctx() ctx: any): Promise<BookableItem> {
    return getPrismaFromContext(ctx).reservation.findUnique({
      where: {
        id: reservation.id,
      },
    }).bookedItem({});
  }
}
