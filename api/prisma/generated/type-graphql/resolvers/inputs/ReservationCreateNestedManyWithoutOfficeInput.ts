import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservationCreateManyOfficeInputEnvelope } from "../inputs/ReservationCreateManyOfficeInputEnvelope";
import { ReservationCreateOrConnectWithoutOfficeInput } from "../inputs/ReservationCreateOrConnectWithoutOfficeInput";
import { ReservationCreateWithoutOfficeInput } from "../inputs/ReservationCreateWithoutOfficeInput";
import { ReservationWhereUniqueInput } from "../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReservationCreateNestedManyWithoutOfficeInput {
  @TypeGraphQL.Field(_type => [ReservationCreateWithoutOfficeInput], {
    nullable: true
  })
  create?: ReservationCreateWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutOfficeInput], {
    nullable: true
  })
  connectOrCreate?: ReservationCreateOrConnectWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateManyOfficeInputEnvelope, {
    nullable: true
  })
  createMany?: ReservationCreateManyOfficeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservationWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservationWhereUniqueInput[] | undefined;
}
