import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservationOrderByInput } from "../../../inputs/ReservationOrderByInput";
import { ReservationWhereInput } from "../../../inputs/ReservationWhereInput";
import { ReservationWhereUniqueInput } from "../../../inputs/ReservationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReservationArgs {
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
}
