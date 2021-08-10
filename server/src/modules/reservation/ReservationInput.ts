import { Reservation } from "src/entity/Reservation";
import { Field, InputType } from "type-graphql";

@InputType()
export class ReservationInput implements Partial<Reservation> {
  @Field()
  userId: number;

  @Field({ description: "The item (seat or workspace) that is booked" })
  bookedItemId: number;

  // this field needs some thinking on. Is it really necessary?
  @Field({ description: "The type of booking that is being made. Eg an office booking or workspace booking." })
  bookingType: string;

  @Field({ defaultValue: false })
  cancelled: boolean;

  @Field()
  dateBookedFrom: Date;

  @Field()
  dateBookedTo: Date;
}