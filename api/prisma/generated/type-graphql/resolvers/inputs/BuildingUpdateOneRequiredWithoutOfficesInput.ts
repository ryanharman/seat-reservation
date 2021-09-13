import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateOrConnectWithoutOfficesInput } from "../inputs/BuildingCreateOrConnectWithoutOfficesInput";
import { BuildingCreateWithoutOfficesInput } from "../inputs/BuildingCreateWithoutOfficesInput";
import { BuildingUpdateWithoutOfficesInput } from "../inputs/BuildingUpdateWithoutOfficesInput";
import { BuildingUpsertWithoutOfficesInput } from "../inputs/BuildingUpsertWithoutOfficesInput";
import { BuildingWhereUniqueInput } from "../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingUpdateOneRequiredWithoutOfficesInput {
  @TypeGraphQL.Field(_type => BuildingCreateWithoutOfficesInput, {
    nullable: true
  })
  create?: BuildingCreateWithoutOfficesInput | undefined;

  @TypeGraphQL.Field(_type => BuildingCreateOrConnectWithoutOfficesInput, {
    nullable: true
  })
  connectOrCreate?: BuildingCreateOrConnectWithoutOfficesInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpsertWithoutOfficesInput, {
    nullable: true
  })
  upsert?: BuildingUpsertWithoutOfficesInput | undefined;

  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: true
  })
  connect?: BuildingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BuildingUpdateWithoutOfficesInput, {
    nullable: true
  })
  update?: BuildingUpdateWithoutOfficesInput | undefined;
}
