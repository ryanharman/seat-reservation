import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyBookedItemInputEnvelope } from "../inputs/ReservationCreateManyBookedItemInputEnvelope";
import { ReservationCreateOrConnectWithoutBookedItemInput } from "../inputs/ReservationCreateOrConnectWithoutBookedItemInput";
import { ReservationCreateWithoutBookedItemInput } from "../inputs/ReservationCreateWithoutBookedItemInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateNestedManyWithoutBookedItemInput {
  @TypeGraphQL.Field(_type => [ReservationCreateWithoutBookedItemInput], {
    nullable: true
  })
  create?: ReservationCreateWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutBookedItemInput], {
    nullable: true
  })
  connectOrCreate?: ReservationCreateOrConnectWithoutBookedItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateManyBookedItemInputEnvelope, {
    nullable: true
  })
  createMany?: ReservationCreateManyBookedItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservationWhereUniqueInput[] | undefined;
}
