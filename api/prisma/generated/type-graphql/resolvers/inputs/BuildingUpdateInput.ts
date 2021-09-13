import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerUpdateManyWithoutBuildingInput } from "../inputs/BuildingManagerUpdateManyWithoutBuildingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OfficeUpdateManyWithoutBuildingInput } from "../inputs/OfficeUpdateManyWithoutBuildingInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeUpdateManyWithoutBuildingInput, {
    nullable: true
  })
  offices?: OfficeUpdateManyWithoutBuildingInput | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerUpdateManyWithoutBuildingInput, {
    nullable: true
  })
  buildingManagers?: BuildingManagerUpdateManyWithoutBuildingInput | undefined;
}
