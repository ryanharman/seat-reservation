import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemUpdateManyWithoutOfficeInput } from "../inputs/BookableItemUpdateManyWithoutOfficeInput";
import { BuildingUpdateOneRequiredWithoutOfficesInput } from "../inputs/BuildingUpdateOneRequiredWithoutOfficesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ReservationUpdateManyWithoutOfficeInput } from "../inputs/ReservationUpdateManyWithoutOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpdateOneRequiredWithoutOfficesInput, {
    nullable: true
  })
  building?: BuildingUpdateOneRequiredWithoutOfficesInput | undefined;

  @TypeGraphQL.Field(_type => ReservationUpdateManyWithoutOfficeInput, {
    nullable: true
  })
  reservations?: ReservationUpdateManyWithoutOfficeInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemUpdateManyWithoutOfficeInput, {
    nullable: true
  })
  bookableItems?: BookableItemUpdateManyWithoutOfficeInput | undefined;
}
