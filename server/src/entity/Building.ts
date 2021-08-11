import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Building extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @OneToOne(() => User)
  managingUser: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field({ nullable: true })
  @Column()
  createdDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  updatedDate: Date;
}
