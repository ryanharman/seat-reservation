import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateOrConnectWithoutBuildingManagersInput } from "../inputs/BuildingCreateOrConnectWithoutBuildingManagersInput";
import { BuildingCreateWithoutBuildingManagersInput } from "../inputs/BuildingCreateWithoutBuildingManagersInput";
import { BuildingUpdateWithoutBuildingManagersInput } from "../inputs/BuildingUpdateWithoutBuildingManagersInput";
import { BuildingUpsertWithoutBuildingManagersInput } from "../inputs/BuildingUpsertWithoutBuildingManagersInput";
import { BuildingWhereUniqueInput } from "../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingUpdateOneRequiredWithoutBuildingManagersInput {
  @TypeGraphQL.Field(_type => BuildingCreateWithoutBuildingManagersInput, {
    nullable: true
  })
  create?: BuildingCreateWithoutBuildingManagersInput | undefined;

  @TypeGraphQL.Field(_type => BuildingCreateOrConnectWithoutBuildingManagersInput, {
    nullable: true
  })
  connectOrCreate?: BuildingCreateOrConnectWithoutBuildingManagersInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpsertWithoutBuildingManagersInput, {
    nullable: true
  })
  upsert?: BuildingUpsertWithoutBuildingManagersInput | undefined;

  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: true
  })
  connect?: BuildingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpdateWithoutBuildingManagersInput, {
    nullable: true
  })
  update?: BuildingUpdateWithoutBuildingManagersInput | undefined;
}
