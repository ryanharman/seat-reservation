import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyUserInputEnvelope } from "../inputs/ReservationCreateManyUserInputEnvelope";
import { ReservationCreateOrConnectWithoutUserInput } from "../inputs/ReservationCreateOrConnectWithoutUserInput";
import { ReservationCreateWithoutUserInput } from "../inputs/ReservationCreateWithoutUserInput";
import { ReservationScalarWhereInput } from "../inputs/ReservationScalarWhereInput";
import { ReservationUpdateManyWithWhereWithoutUserInput } from "../inputs/ReservationUpdateManyWithWhereWithoutUserInput";
import { ReservationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReservationUpdateWithWhereUniqueWithoutUserInput";
import { ReservationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReservationUpsertWithWhereUniqueWithoutUserInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReservationCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReservationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReservationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReservationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  set?: ReservationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReservationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  delete?: ReservationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ReservationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ReservationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReservationScalarWhereInput[] | undefined;
}
