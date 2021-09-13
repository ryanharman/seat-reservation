import * as TypeGraphQL from "type-graphql";
import { BookableItem } from "../../../models/BookableItem";
import { Office } from "../../../models/Office";
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

  @TypeGraphQL.FieldResolver(_type => Office, {
    nullable: false
  })
  async office(@TypeGraphQL.Root() reservation: Reservation, @TypeGraphQL.Ctx() ctx: any): Promise<Office> {
    return getPrismaFromContext(ctx).reservation.findUnique({
      where: {
        id: reservation.id,
      },
    }).office({});
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
