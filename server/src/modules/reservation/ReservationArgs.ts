import { BookingType } from "../../types/BookingTypeEnum";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ReservationArgs {
  @Field()
  userId: number;

  @Field({ description: "The item (seat or workspace) that is booked" })
  bookedItemId: number;

  // this field needs some thinking on. Is it really necessary?
  @Field({ description: "The type of booking that is being made. Eg an office booking or workspace booking." })
  bookingType: BookingType;

  @Field({ defaultValue: false })
  cancelled: boolean;

  @Field()
  dateBookedFrom: Date;

  @Field()
  dateBookedTo: Date;
}
