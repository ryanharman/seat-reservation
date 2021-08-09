import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class BookableItem extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  createdDate: Date;

  @Field()
  @Column()
  updatedDate: Date;
}
