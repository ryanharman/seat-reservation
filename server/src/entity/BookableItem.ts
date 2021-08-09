import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BookableItemEnum } from "src/types/BookableItemEnum";

@ObjectType()
@Entity()
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
