import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Office } from "./Office";
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
  @OneToOne(() => Office)
  officeId: number;

  @Field()
  @Column()
  @OneToOne(() => User)
  userId: number;

  @Field({ nullable: true })
  @Column()
  createdDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  updatedDate: Date;
}
