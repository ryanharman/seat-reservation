import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput } from "../inputs/BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OfficeUpdateOneRequiredWithoutBookableItemsInput } from "../inputs/OfficeUpdateOneRequiredWithoutBookableItemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemUpdateWithoutReservationsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  available?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeUpdateOneRequiredWithoutBookableItemsInput, {
    nullable: true
  })
  office?: OfficeUpdateOneRequiredWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput, {
    nullable: true
  })
  type?: BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput | undefined;
}
