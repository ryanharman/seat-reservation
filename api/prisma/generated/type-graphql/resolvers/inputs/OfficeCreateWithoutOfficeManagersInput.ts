import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemCreateNestedManyWithoutOfficeInput } from "../inputs/BookableItemCreateNestedManyWithoutOfficeInput";
import { BuildingCreateNestedOneWithoutOfficesInput } from "../inputs/BuildingCreateNestedOneWithoutOfficesInput";
import { ReservationCreateNestedManyWithoutOfficeInput } from "../inputs/ReservationCreateNestedManyWithoutOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BuildingCreateNestedOneWithoutOfficesInput, {
    nullable: false
  })
  building!: BuildingCreateNestedOneWithoutOfficesInput;

  @TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutOfficeInput, {
    nullable: true
  })
  reservations?: ReservationCreateNestedManyWithoutOfficeInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemCreateNestedManyWithoutOfficeInput, {
    nullable: true
  })
  bookableItems?: BookableItemCreateNestedManyWithoutOfficeInput | undefined;
}
