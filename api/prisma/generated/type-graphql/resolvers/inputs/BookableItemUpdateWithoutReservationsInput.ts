import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput } from "../inputs/BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
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
  officeExclusive?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  available?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeUpdateOneRequiredWithoutBookableItemsInput, {
    nullable: true
  })
  office?: OfficeUpdateOneRequiredWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput, {
    nullable: true
  })
  type?: BookableItemTypesUpdateOneRequiredWithoutBookableItemsInput | undefined;
}
