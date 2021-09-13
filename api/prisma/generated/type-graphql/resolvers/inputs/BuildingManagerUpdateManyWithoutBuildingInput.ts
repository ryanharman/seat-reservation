import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateManyBuildingInputEnvelope } from "../inputs/BuildingManagerCreateManyBuildingInputEnvelope";
import { BuildingManagerCreateOrConnectWithoutBuildingInput } from "../inputs/BuildingManagerCreateOrConnectWithoutBuildingInput";
import { BuildingManagerCreateWithoutBuildingInput } from "../inputs/BuildingManagerCreateWithoutBuildingInput";
import { BuildingManagerScalarWhereInput } from "../inputs/BuildingManagerScalarWhereInput";
import { BuildingManagerUpdateManyWithWhereWithoutBuildingInput } from "../inputs/BuildingManagerUpdateManyWithWhereWithoutBuildingInput";
import { BuildingManagerUpdateWithWhereUniqueWithoutBuildingInput } from "../inputs/BuildingManagerUpdateWithWhereUniqueWithoutBuildingInput";
import { BuildingManagerUpsertWithWhereUniqueWithoutBuildingInput } from "../inputs/BuildingManagerUpsertWithWhereUniqueWithoutBuildingInput";
import { BuildingManagerWhereUniqueInput } from "../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerUpdateManyWithoutBuildingInput {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateWithoutBuildingInput], {
    nullable: true
  })
  create?: BuildingManagerCreateWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerCreateOrConnectWithoutBuildingInput], {
    nullable: true
  })
  connectOrCreate?: BuildingManagerCreateOrConnectWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerUpsertWithWhereUniqueWithoutBuildingInput], {
    nullable: true
  })
  upsert?: BuildingManagerUpsertWithWhereUniqueWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerCreateManyBuildingInputEnvelope, {
    nullable: true
  })
  createMany?: BuildingManagerCreateManyBuildingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: BuildingManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerWhereUniqueInput], {
    nullable: true
  })
  set?: BuildingManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BuildingManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerWhereUniqueInput], {
    nullable: true
  })
  delete?: BuildingManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerUpdateWithWhereUniqueWithoutBuildingInput], {
    nullable: true
  })
  update?: BuildingManagerUpdateWithWhereUniqueWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerUpdateManyWithWhereWithoutBuildingInput], {
    nullable: true
  })
  updateMany?: BuildingManagerUpdateManyWithWhereWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BuildingManagerScalarWhereInput[] | undefined;
}
