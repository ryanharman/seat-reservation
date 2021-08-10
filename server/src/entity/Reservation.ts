import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { BookableItem } from "./BookableItem";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column(() => User)
  userId: number;

  @Field({ description: "The item (seat or workspace) that is booked" })
  @Column(() => BookableItem)
  bookedItemId: number;

  // this field needs some thinking on. Is it really necessary?
  @Field({
    description: "The type of booking that is being made. Eg an office booking or workspace booking.",
  })
  @Column()
  bookingType: string;

  @Field({ defaultValue: false })
  @Column()
  cancelled: boolean;

  @Field()
  @Column()
  dateBookedFrom: Date;

  @Field()
  @Column()
  dateBookedTo: Date;

  @Field()
  @Column()
  createdDate: Date;

  @Field()
  @Column()
  updatedDate: Date;
}
