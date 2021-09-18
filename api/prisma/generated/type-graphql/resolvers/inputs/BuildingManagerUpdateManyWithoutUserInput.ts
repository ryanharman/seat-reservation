import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateManyUserInputEnvelope } from "../inputs/BuildingManagerCreateManyUserInputEnvelope";
import { BuildingManagerCreateOrConnectWithoutUserInput } from "../inputs/BuildingManagerCreateOrConnectWithoutUserInput";
import { BuildingManagerCreateWithoutUserInput } from "../inputs/BuildingManagerCreateWithoutUserInput";
import { BuildingManagerScalarWhereInput } from "../inputs/BuildingManagerScalarWhereInput";
import { BuildingManagerUpdateManyWithWhereWithoutUserInput } from "../inputs/BuildingManagerUpdateManyWithWhereWithoutUserInput";
import { BuildingManagerUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BuildingManagerUpdateWithWhereUniqueWithoutUserInput";
import { BuildingManagerUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BuildingManagerUpsertWithWhereUniqueWithoutUserInput";
import { BuildingManagerWhereUniqueInput } from "../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateWithoutUserInput], {
    nullable: true
  })
  create?: BuildingManagerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BuildingManagerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BuildingManagerUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BuildingManagerCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BuildingManagerUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BuildingManagerUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BuildingManagerUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BuildingManagerScalarWhereInput[] | undefined;
}
