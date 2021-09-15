import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingUpdateOneRequiredWithoutOfficesInput } from "../inputs/BuildingUpdateOneRequiredWithoutOfficesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OfficeManagerUpdateManyWithoutOfficeInput } from "../inputs/OfficeManagerUpdateManyWithoutOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateWithoutBookableItemsInput {
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

  @TypeGraphQL.Field(_type => OfficeManagerUpdateManyWithoutOfficeInput, {
    nullable: true
  })
  officeManagers?: OfficeManagerUpdateManyWithoutOfficeInput | undefined;
}
