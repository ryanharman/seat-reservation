import "reflect-metadata";
import { Reservation } from "../entity/Reservation";
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "./middleware/isAuth";
import { MyContext } from "../types/MyContext";
import { User } from "../entity/User";
import { ReservationInput } from "./reservation/ReservationInput";
import { ObjectLiteral } from "typeorm";
// import { ObjectLiteral } from "typeorm";

@Resolver()
export class ReservationResolver {
  @UseMiddleware(isAuth)
  @Query(() => Reservation)
  async reservationById(@Arg("id") id: string): Promise<Reservation | undefined> {
    const reservation = await Reservation.findOne(id);

    if (!reservation) {
      return undefined;
    }

    return reservation;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservations(): Promise<Reservation[] | null> {
    const reservations = await Reservation.find();

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationByType(@Arg("type") type: string): Promise<Reservation[] | null> {
    const reservations = await Reservation.find({ bookingType: type });

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationByTypeAndItem(@Arg("type") type: string, @Arg("item") item: number): Promise<Reservation[] | null> {
    const reservations = await Reservation.find({ bookingType: type, bookedItemId: item });

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationsFromDate(
    @Arg("type") type: string,
    @Arg("dateFrom") dateFrom: Date,
    @Arg("dateTo", { defaultValue: new Date() }) dateTo: Date
  ): Promise<Reservation[] | null> {
    const reservations = await Reservation.find({
      bookingType: type,
      dateBookedFrom: dateFrom,
      dateBookedTo: dateTo,
    });

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  // look into fixing this
  @Mutation(() => Reservation)
  async createReservation(
    @Arg("data", () => ReservationInput)
    { userId, bookedItemId, bookingType, dateBookedFrom, dateBookedTo }: ReservationInput,
    @Ctx() ctx: MyContext
  ): Promise<Reservation> {
    // if the user is booking for someone else then they will be passing the UID through.
    // if theyre booking for themselves then no UID needs to be passed.
    if (userId == null) {
      const currUser = await User.findOne(ctx.req.session!.userId);
      userId = currUser!.id;
    }

    const reservation = await Reservation.create({
      userId,
      bookedItemId,
      bookingType,
      dateBookedFrom,
      dateBookedTo,
    }).save();

    return reservation;
  }

  @Mutation(() => [Reservation])
  async createReservations(@Arg("data", () => [ReservationInput]) data: ReservationInput[]): Promise<ObjectLiteral[]> {
    /* Need to test if this actually works and whether it actually returns the ID's! */
    const reservations = (
      await Reservation.createQueryBuilder()
        .insert()
        .values(
          data.map((r) => {
            return {
              userId: r.userId,
              bookedItemId: r.bookedItemId,
              bookingType: r.bookingType,
              dateBookedFrom: r.dateBookedFrom,
              dateBookedTo: r.dateBookedTo,
            };
          })
        )
        .execute()
    ).identifiers;
    console.log(reservations);

    return reservations;
  }
}