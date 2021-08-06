import "reflect-metadata";
import { Field, ID, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class BookingType {
  @Field()
  seat: string;

  @Field()
  office: string;

  @Field()
  workspace: string;
}

@ObjectType()
class Reservation {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  bookedItemId: string; // the id of the seat, office or workspace

  @Field()
  bookingType: BookingType; // seat, office or workspace

  @Field()
  cancelled: boolean;

  @Field()
  dateBookedFrom: Date;

  @Field()
  dateBookedTo: Date;

  @Field()
  createdDate: Date;
}

@Resolver()
export class ReservationResolver {
  @Query(() => [Reservation])
  async reservations() {
    // perform action here with id
    console.log("reservations champ");
  }
}
