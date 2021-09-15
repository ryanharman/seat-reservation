import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemUpdateManyWithoutOfficeInput } from "../inputs/BookableItemUpdateManyWithoutOfficeInput";
import { BuildingUpdateOneRequiredWithoutOfficesInput } from "../inputs/BuildingUpdateOneRequiredWithoutOfficesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpdateOneRequiredWithoutOfficesInput, {
    nullable: true
  })
  building?: BuildingUpdateOneRequiredWithoutOfficesInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemUpdateManyWithoutOfficeInput, {
    nullable: true
  })
  bookableItems?: BookableItemUpdateManyWithoutOfficeInput | undefined;
}
