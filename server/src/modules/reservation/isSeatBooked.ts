import { Reservation } from "src/entity/Reservation";
import { MiddlewareFn } from "type-graphql";

export const isSeatBooked: MiddlewareFn = async ({ args }, next) => {
  const { userId, bookedItemId, bookingType, dateBookedFrom, dateBookedTo } = args.data;
  console.log(userId, bookedItemId, bookingType, dateBookedFrom, dateBookedTo);
  // TODO: logic go brrr

  return next();
};
