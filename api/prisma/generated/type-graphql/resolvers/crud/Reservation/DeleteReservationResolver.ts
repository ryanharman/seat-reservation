import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteReservationArgs } from "./args/DeleteReservationArgs";
import { Reservation } from "../../../models/Reservation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reservation)
export class DeleteReservationResolver {
  @TypeGraphQL.Mutation(_returns => Reservation, {
    nullable: true
  })
  async deleteReservation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteReservationArgs): Promise<Reservation | null> {
    return getPrismaFromContext(ctx).reservation.delete(args);
  }
}
