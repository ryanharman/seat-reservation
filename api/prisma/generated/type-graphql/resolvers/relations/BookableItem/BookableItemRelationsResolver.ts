import * as TypeGraphQL from "type-graphql";
import { BookableItem } from "../../../models/BookableItem";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { Office } from "../../../models/Office";
import { Reservation } from "../../../models/Reservation";
import { BookableItemReservationsArgs } from "./args/BookableItemReservationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItem)
export class BookableItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Office, {
    nullable: false
  })
  async office(@TypeGraphQL.Root() bookableItem: BookableItem, @TypeGraphQL.Ctx() ctx: any): Promise<Office> {
    return getPrismaFromContext(ctx).bookableItem.findUnique({
      where: {
        id: bookableItem.id,
      },
    }).office({});
  }

  @TypeGraphQL.FieldResolver(_type => BookableItemTypes, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() bookableItem: BookableItem, @TypeGraphQL.Ctx() ctx: any): Promise<BookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItem.findUnique({
      where: {
        id: bookableItem.id,
      },
    }).type({});
  }

  @TypeGraphQL.FieldResolver(_type => [Reservation], {
    nullable: false
  })
  async reservations(@TypeGraphQL.Root() bookableItem: BookableItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookableItemReservationsArgs): Promise<Reservation[]> {
    return getPrismaFromContext(ctx).bookableItem.findUnique({
      where: {
        id: bookableItem.id,
      },
    }).reservations(args);
  }
}
