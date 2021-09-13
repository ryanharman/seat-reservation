import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstReservationArgs } from "./args/FindFirstReservationArgs";
import { Reservation } from "../../../models/Reservation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reservation)
export class FindFirstReservationResolver {
  @TypeGraphQL.Query(_returns => Reservation, {
    nullable: true
  })
  async findFirstReservation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReservationArgs): Promise<Reservation | null> {
    return getPrismaFromContext(ctx).reservation.findFirst(args);
  }
}
