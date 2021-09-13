import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateNestedOneWithoutReservationsInput } from "../inputs/OfficeCreateNestedOneWithoutReservationsInput";
import { UserCreateNestedOneWithoutReservationsInput } from "../inputs/UserCreateNestedOneWithoutReservationsInput";
import { Role } from "../../enums/Role";

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

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

  @TypeGraphQL.Field(_type => OfficeCreateNestedOneWithoutReservationsInput, {
    nullable: false
  })
  office!: OfficeCreateNestedOneWithoutReservationsInput;
}
