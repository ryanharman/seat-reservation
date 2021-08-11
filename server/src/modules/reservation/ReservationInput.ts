import { Reservation } from "src/entity/Reservation";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateReservationInput implements Partial<Reservation> {
  @Field()
  userId: number;

  @Field({ description: "The item (seat or workspace) that is booked" })
  bookedItemId: number;

  @Field({ description: "The type of booking that is being made. Eg an office booking or workspace booking." })
  bookingType: string;

  @Field()
  dateBookedFrom: Date;

  @Field()
  dateBookedTo: Date;
}

@InputType()
export class UpdateReservationInput implements Partial<Reservation> {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field({ description: "The item (seat or workspace) that is booked" })
  bookedItemId: number;

  @Field({ description: "The type of booking that is being made. Eg an office booking or workspace booking." })
  bookingType: string;

  @Field()
  cancelled: boolean;

  @Field()
  dateBookedFrom: Date;

  @Field()
  dateBookedTo: Date;
}
