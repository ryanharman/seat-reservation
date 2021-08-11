import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Building } from "./Building";
import { Office } from "./Office";

@ObjectType()
@Entity()
export class BookableItem extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @OneToOne(() => Building)
  buildingId: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  @OneToOne(() => Office)
  officeId: number;

  @Field()
  @Column()
  itemType: string;

  @Field({ nullable: true, defaultValue: true })
  @Column({ default: true })
  isAvailable: boolean;

  @Field({
    nullable: true,
    defaultValue: true,
    description:
      "Determines whether the item can be booked by users who do not have access to the office the item is linked to. If the officeId is null then this value will be ignored",
  })
  @Column({ default: false })
  isExclusive: boolean;

  @Field({ nullable: true })
  @Column()
  createdDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  updatedDate: Date;
}
