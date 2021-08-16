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
  @CreateDateColumn()
  createdDate: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ nullable: true })
  updatedDate: Date;
}
