import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemUpdateManyWithoutOfficeInput } from "../inputs/BookableItemUpdateManyWithoutOfficeInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OfficeManagerUpdateManyWithoutOfficeInput } from "../inputs/OfficeManagerUpdateManyWithoutOfficeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateWithoutBuildingInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookableItemUpdateManyWithoutOfficeInput, {
    nullable: true
  })
  bookableItems?: BookableItemUpdateManyWithoutOfficeInput | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerUpdateManyWithoutOfficeInput, {
    nullable: true
  })
  officeManagers?: OfficeManagerUpdateManyWithoutOfficeInput | undefined;
}
