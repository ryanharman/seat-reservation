import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyReservationArgs } from "./args/FindManyReservationArgs";
import { Reservation } from "../../../models/Reservation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reservation)
export class FindManyReservationResolver {
  @TypeGraphQL.Query(_returns => [Reservation], {
    nullable: false
  })
  async reservations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyReservationArgs): Promise<Reservation[]> {
    return getPrismaFromContext(ctx).reservation.findMany(args);
  }
}
