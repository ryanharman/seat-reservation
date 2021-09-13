import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateManyOfficeInputEnvelope } from "../inputs/OfficeManagerCreateManyOfficeInputEnvelope";
import { OfficeManagerCreateOrConnectWithoutOfficeInput } from "../inputs/OfficeManagerCreateOrConnectWithoutOfficeInput";
import { OfficeManagerCreateWithoutOfficeInput } from "../inputs/OfficeManagerCreateWithoutOfficeInput";
import { OfficeManagerScalarWhereInput } from "../inputs/OfficeManagerScalarWhereInput";
import { OfficeManagerUpdateManyWithWhereWithoutOfficeInput } from "../inputs/OfficeManagerUpdateManyWithWhereWithoutOfficeInput";
import { OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput } from "../inputs/OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput";
import { OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput } from "../inputs/OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput";
import { OfficeManagerWhereUniqueInput } from "../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerUpdateManyWithoutOfficeInput {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateWithoutOfficeInput], {
    nullable: true
  })
  create?: OfficeManagerCreateWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerCreateOrConnectWithoutOfficeInput], {
    nullable: true
  })
  connectOrCreate?: OfficeManagerCreateOrConnectWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput], {
    nullable: true
  })
  upsert?: OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerCreateManyOfficeInputEnvelope, {
    nullable: true
  })
  createMany?: OfficeManagerCreateManyOfficeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput], {
    nullable: true
  })
  update?: OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerUpdateManyWithWhereWithoutOfficeInput], {
    nullable: true
  })
  updateMany?: OfficeManagerUpdateManyWithWhereWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfficeManagerScalarWhereInput[] | undefined;
}
