import { ObjectType, Field, ID } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class UserAccess extends BaseEntity {
  @Field(() => ID)
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @OneToOne(() => User)
  userId: number;

  // look into a good solution for roles
  // static access levels or user created roles with flexibility?
  @Field()
  @Column()
  role: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  createdDate: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ nullable: true })
  updatedDate: Date;
}
