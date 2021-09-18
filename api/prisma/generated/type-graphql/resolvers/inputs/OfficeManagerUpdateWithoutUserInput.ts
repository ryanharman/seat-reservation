import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OfficeUpdateOneRequiredWithoutOfficeManagersInput } from "../inputs/OfficeUpdateOneRequiredWithoutOfficeManagersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeUpdateOneRequiredWithoutOfficeManagersInput, {
    nullable: true
  })
  office?: OfficeUpdateOneRequiredWithoutOfficeManagersInput | undefined;
}
