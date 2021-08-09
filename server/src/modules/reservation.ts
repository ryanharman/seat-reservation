import "reflect-metadata";
import { Reservation } from "src/entity/Reservation";
import { BookingType } from "src/types/BookingTypeEnum";
import { Arg, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "./middleware/isAuth";

@Resolver()
export class ReservationResolver {
  @UseMiddleware(isAuth)
  @Query(() => Reservation)
  async reservationById(@Arg("id") id: string) {
    const reservation = Reservation.findOne({ id: id });

    if (!reservation) {
      return null;
    }

    return reservation;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservations() {
    const reservations = Reservation.find();

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationByType(@Arg("type") type: BookingType) {
    const reservations = Reservation.find({ bookingType: type });

    if (!reservations) {
      return null;
    }

    return reservations;
  }

  @UseMiddleware(isAuth)
  @Query(() => [Reservation])
  async reservationByTypeAndItem(@Arg("type") type: BookingType, @Arg("item") item: string) {
    const reservations = Reservation.find({ bookingType: type, bookedItemId: item });

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
  ) {
    const reservations = Reservation.find({
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
