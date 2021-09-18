import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateManyUserInputEnvelope } from "../inputs/OfficeManagerCreateManyUserInputEnvelope";
import { OfficeManagerCreateOrConnectWithoutUserInput } from "../inputs/OfficeManagerCreateOrConnectWithoutUserInput";
import { OfficeManagerCreateWithoutUserInput } from "../inputs/OfficeManagerCreateWithoutUserInput";
import { OfficeManagerScalarWhereInput } from "../inputs/OfficeManagerScalarWhereInput";
import { OfficeManagerUpdateManyWithWhereWithoutUserInput } from "../inputs/OfficeManagerUpdateManyWithWhereWithoutUserInput";
import { OfficeManagerUpdateWithWhereUniqueWithoutUserInput } from "../inputs/OfficeManagerUpdateWithWhereUniqueWithoutUserInput";
import { OfficeManagerUpsertWithWhereUniqueWithoutUserInput } from "../inputs/OfficeManagerUpsertWithWhereUniqueWithoutUserInput";
import { OfficeManagerWhereUniqueInput } from "../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateWithoutUserInput], {
    nullable: true
  })
  create?: OfficeManagerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: OfficeManagerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: OfficeManagerUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: OfficeManagerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: OfficeManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput], {
    nullable: true
  })
  set?: OfficeManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OfficeManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput], {
    nullable: true
  })
  delete?: OfficeManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: OfficeManagerUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: OfficeManagerUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfficeManagerScalarWhereInput[] | undefined;
}
