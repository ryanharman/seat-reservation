import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateManyBuildingInputEnvelope } from "../inputs/OfficeCreateManyBuildingInputEnvelope";
import { OfficeCreateOrConnectWithoutBuildingInput } from "../inputs/OfficeCreateOrConnectWithoutBuildingInput";
import { OfficeCreateWithoutBuildingInput } from "../inputs/OfficeCreateWithoutBuildingInput";
import { OfficeScalarWhereInput } from "../inputs/OfficeScalarWhereInput";
import { OfficeUpdateManyWithWhereWithoutBuildingInput } from "../inputs/OfficeUpdateManyWithWhereWithoutBuildingInput";
import { OfficeUpdateWithWhereUniqueWithoutBuildingInput } from "../inputs/OfficeUpdateWithWhereUniqueWithoutBuildingInput";
import { OfficeUpsertWithWhereUniqueWithoutBuildingInput } from "../inputs/OfficeUpsertWithWhereUniqueWithoutBuildingInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateManyWithoutBuildingInput {
  @TypeGraphQL.Field(_type => [OfficeCreateWithoutBuildingInput], {
    nullable: true
  })
  create?: OfficeCreateWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeCreateOrConnectWithoutBuildingInput], {
    nullable: true
  })
  connectOrCreate?: OfficeCreateOrConnectWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeUpsertWithWhereUniqueWithoutBuildingInput], {
    nullable: true
  })
  upsert?: OfficeUpsertWithWhereUniqueWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateManyBuildingInputEnvelope, {
    nullable: true
  })
  createMany?: OfficeCreateManyBuildingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereUniqueInput], {
    nullable: true
  })
  connect?: OfficeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereUniqueInput], {
    nullable: true
  })
  set?: OfficeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OfficeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereUniqueInput], {
    nullable: true
  })
  delete?: OfficeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeUpdateWithWhereUniqueWithoutBuildingInput], {
    nullable: true
  })
  update?: OfficeUpdateWithWhereUniqueWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeUpdateManyWithWhereWithoutBuildingInput], {
    nullable: true
  })
  updateMany?: OfficeUpdateManyWithWhereWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfficeScalarWhereInput[] | undefined;
}
