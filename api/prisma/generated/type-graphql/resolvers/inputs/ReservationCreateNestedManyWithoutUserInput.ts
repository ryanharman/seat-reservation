import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyUserInputEnvelope } from "../inputs/ReservationCreateManyUserInputEnvelope";
import { ReservationCreateOrConnectWithoutUserInput } from "../inputs/ReservationCreateOrConnectWithoutUserInput";
import { ReservationCreateWithoutUserInput } from "../inputs/ReservationCreateWithoutUserInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReservationCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReservationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReservationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReservationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservationWhereUniqueInput[] | undefined;
}
