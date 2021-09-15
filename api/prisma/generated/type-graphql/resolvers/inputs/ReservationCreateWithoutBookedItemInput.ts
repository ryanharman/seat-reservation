import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReservationsInput } from "../inputs/UserCreateNestedOneWithoutReservationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateWithoutBookedItemInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dateBookedFrom!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dateBookedTo!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  cancelled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReservationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutReservationsInput;
}
