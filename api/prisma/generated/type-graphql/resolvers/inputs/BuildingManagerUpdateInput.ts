import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingUpdateOneRequiredWithoutBuildingManagersInput } from "../inputs/BuildingUpdateOneRequiredWithoutBuildingManagersInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBuildingManagerInput } from "../inputs/UserUpdateOneRequiredWithoutBuildingManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerUpdateInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpdateOneRequiredWithoutBuildingManagersInput, {
    nullable: true
  })
  building?: BuildingUpdateOneRequiredWithoutBuildingManagersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBuildingManagerInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBuildingManagerInput | undefined;
}
