import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BookableItemEnum } from "../types/BookableItemEnum";
import { Location } from "./Location";

@ObjectType()
@Entity()
export class BookableItem extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column(() => Location)
  parentId: number;

  @Field()
  @Column()
  itemType: BookableItemEnum;

  @Field({ nullable: true, defaultValue: true })
  @Column()
  available: boolean;

  @Field()
  @Column()
  createdDate: Date;

  @Field()
  @Column()
  updatedDate: Date;
}