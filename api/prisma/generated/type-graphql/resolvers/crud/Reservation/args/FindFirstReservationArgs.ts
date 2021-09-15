import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservationOrderByInput } from "../../../inputs/ReservationOrderByInput";
import { ReservationWhereInput } from "../../../inputs/ReservationWhereInput";
import { ReservationWhereUniqueInput } from "../../../inputs/ReservationWhereUniqueInput";
import { ReservationScalarFieldEnum } from "../../../../enums/ReservationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstReservationArgs {
  @TypeGraphQL.Field(_type => ReservationWhereInput, {
    nullable: true
  })
  where?: ReservationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReservationOrderByInput], {
    nullable: true
  })
  orderBy?: ReservationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservationWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReservationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReservationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "bookedItemId" | "dateBookedFrom" | "dateBookedTo" | "cancelled" | "createdAt" | "updatedAt"> | undefined;
}
