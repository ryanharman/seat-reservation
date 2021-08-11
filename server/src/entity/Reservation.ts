import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
  @Column()
  @OneToOne(() => User)
  userId: number;

  @Field({ description: "The item (seat, meeting room or workspace) that is booked" })
  @Column()
  @OneToOne(() => BookableItem)
  bookedItemId: number;

  @Field({
    description: "The type of booking that is being made (seat, meeting room or workspace)",
  })
  @Column()
  bookingType: string;

  @Field({ defaultValue: false, nullable: true })
  @Column({ default: false })
  cancelled: boolean;

  @Field()
  @Column()
  dateBookedFrom: Date;

  @Field()
  @Column()
  dateBookedTo: Date;

  @Field({ nullable: true })
  @Column()
  createdDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  updatedDate: Date;
}
