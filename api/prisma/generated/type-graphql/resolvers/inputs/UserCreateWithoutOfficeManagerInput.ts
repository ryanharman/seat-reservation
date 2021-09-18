import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateNestedManyWithoutUserInput } from "../inputs/BuildingManagerCreateNestedManyWithoutUserInput";
import { ReservationCreateNestedManyWithoutUserInput } from "../inputs/ReservationCreateNestedManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutOfficeManagerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "OFFICE_MANAGER" | "BUILDING_MANAGER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  reservations?: ReservationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  BuildingManager?: BuildingManagerCreateNestedManyWithoutUserInput | undefined;
}
