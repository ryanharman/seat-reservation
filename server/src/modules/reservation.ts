import "reflect-metadata";
import { Reservation } from "src/entity/Reservation";
import { BookingType } from "src/types/BookingTypeEnum";
import { Arg, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "./middleware/isAuth";

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
  async reservationByType(@Arg("type") type: BookingType): Promise<Reservation[] | null> {
    const reservations = await Reservation.find({ bookingType: type });

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationByTypeAndItem(
    @Arg("type") type: BookingType,
    @Arg("item") item: string
  ): Promise<Reservation[] | null> {
    const reservations = await Reservation.find({ bookingType: type, bookedItemId: item });

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationsFromDate(
    @Arg("type") type: BookingType,
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
}
