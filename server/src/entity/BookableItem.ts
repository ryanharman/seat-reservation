import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BookableItemEnum } from "src/types/BookableItemEnum";

@ObjectType()
export class BookableItem extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: true })
  @Column(() => Location)
  parentId: string;

  @Field()
  @Column()
  itemType: BookableItemEnum;

  @Field({ nullable: true })
  @Column()
  available: boolean;

  @Field()
  @Column()
  createdDate: Date;

  @Field()
  @Column()
  updatedDate: Date;
}
