import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReservationArgs } from "./args/FindUniqueReservationArgs";
import { Reservation } from "../../../models/Reservation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reservation)
export class FindUniqueReservationResolver {
  @TypeGraphQL.Query(_returns => Reservation, {
    nullable: true
  })
  async reservation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueReservationArgs): Promise<Reservation | null> {
    return getPrismaFromContext(ctx).reservation.findUnique(args);
  }
}
