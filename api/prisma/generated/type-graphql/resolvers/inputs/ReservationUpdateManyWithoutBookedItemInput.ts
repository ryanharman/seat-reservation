import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyBookedItemInputEnvelope } from "../inputs/ReservationCreateManyBookedItemInputEnvelope";
import { ReservationCreateOrConnectWithoutBookedItemInput } from "../inputs/ReservationCreateOrConnectWithoutBookedItemInput";
import { ReservationCreateWithoutBookedItemInput } from "../inputs/ReservationCreateWithoutBookedItemInput";
import { ReservationScalarWhereInput } from "../inputs/ReservationScalarWhereInput";
import { ReservationUpdateManyWithWhereWithoutBookedItemInput } from "../inputs/ReservationUpdateManyWithWhereWithoutBookedItemInput";
import { ReservationUpdateWithWhereUniqueWithoutBookedItemInput } from "../inputs/ReservationUpdateWithWhereUniqueWithoutBookedItemInput";
import { ReservationUpsertWithWhereUniqueWithoutBookedItemInput } from "../inputs/ReservationUpsertWithWhereUniqueWithoutBookedItemInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationUpdateManyWithoutBookedItemInput {
  @TypeGraphQL.Field(_type => [ReservationCreateWithoutBookedItemInput], {
    nullable: true
  })
  create?: ReservationCreateWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutBookedItemInput], {
    nullable: true
  })
  connectOrCreate?: ReservationCreateOrConnectWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutBookedItemInput], {
    nullable: true
  })
  upsert?: ReservationUpsertWithWhereUniqueWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateManyBookedItemInputEnvelope, {
    nullable: true
  })
  createMany?: ReservationCreateManyBookedItemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutBookedItemInput], {
    nullable: true
  })
  update?: ReservationUpdateWithWhereUniqueWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutBookedItemInput], {
    nullable: true
  })
  updateMany?: ReservationUpdateManyWithWhereWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReservationScalarWhereInput[] | undefined;
}
