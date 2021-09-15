import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservationOrderByInput } from "../../../inputs/ReservationOrderByInput";
import { ReservationScalarWhereWithAggregatesInput } from "../../../inputs/ReservationScalarWhereWithAggregatesInput";
import { ReservationWhereInput } from "../../../inputs/ReservationWhereInput";
import { ReservationScalarFieldEnum } from "../../../../enums/ReservationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReservationArgs {
  @TypeGraphQL.Field(_type => ReservationWhereInput, {
    nullable: true
  })
  where?: ReservationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReservationOrderByInput], {
    nullable: true
  })
  orderBy?: ReservationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "bookedItemId" | "dateBookedFrom" | "dateBookedTo" | "cancelled" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ReservationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReservationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
