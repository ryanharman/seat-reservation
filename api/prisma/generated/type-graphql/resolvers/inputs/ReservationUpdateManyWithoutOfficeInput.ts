import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyOfficeInputEnvelope } from "../inputs/ReservationCreateManyOfficeInputEnvelope";
import { ReservationCreateOrConnectWithoutOfficeInput } from "../inputs/ReservationCreateOrConnectWithoutOfficeInput";
import { ReservationCreateWithoutOfficeInput } from "../inputs/ReservationCreateWithoutOfficeInput";
import { ReservationScalarWhereInput } from "../inputs/ReservationScalarWhereInput";
import { ReservationUpdateManyWithWhereWithoutOfficeInput } from "../inputs/ReservationUpdateManyWithWhereWithoutOfficeInput";
import { ReservationUpdateWithWhereUniqueWithoutOfficeInput } from "../inputs/ReservationUpdateWithWhereUniqueWithoutOfficeInput";
import { ReservationUpsertWithWhereUniqueWithoutOfficeInput } from "../inputs/ReservationUpsertWithWhereUniqueWithoutOfficeInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpdateManyWithoutOfficeInput {
  @TypeGraphQL.Field(_type => [ReservationCreateWithoutOfficeInput], {
    nullable: true
  })
  create?: ReservationCreateWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutOfficeInput], {
    nullable: true
  })
  connectOrCreate?: ReservationCreateOrConnectWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutOfficeInput], {
    nullable: true
  })
  upsert?: ReservationUpsertWithWhereUniqueWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateManyOfficeInputEnvelope, {
    nullable: true
  })
  createMany?: ReservationCreateManyOfficeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutOfficeInput], {
    nullable: true
  })
  update?: ReservationUpdateWithWhereUniqueWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutOfficeInput], {
    nullable: true
  })
  updateMany?: ReservationUpdateManyWithWhereWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReservationScalarWhereInput[] | undefined;
}
