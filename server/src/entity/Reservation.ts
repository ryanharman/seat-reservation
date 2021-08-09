import { BookingType } from "../types/BookingTypeEnum";
import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { BookableItem } from "./BookableItem";

@ObjectType()
export class Reservation extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column(() => User)
  userId: string;

  @Field()
  @Column(() => BookableItem)
  bookedItemId: string;

  @Field()
  @Column()
  bookingType: BookingType;

  @Field()
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
