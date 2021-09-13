import * as TypeGraphQL from "type-graphql";
import { BookableItem } from "../../../models/BookableItem";
import { Building } from "../../../models/Building";
import { Office } from "../../../models/Office";
import { OfficeManager } from "../../../models/OfficeManager";
import { Reservation } from "../../../models/Reservation";
import { OfficeBookableItemsArgs } from "./args/OfficeBookableItemsArgs";
import { OfficeOfficeManagersArgs } from "./args/OfficeOfficeManagersArgs";
import { OfficeReservationsArgs } from "./args/OfficeReservationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class OfficeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Building, {
    nullable: false
  })
  async building(@TypeGraphQL.Root() office: Office, @TypeGraphQL.Ctx() ctx: any): Promise<Building> {
    return getPrismaFromContext(ctx).office.findUnique({
      where: {
        id: office.id,
      },
    }).building({});
  }

  @TypeGraphQL.FieldResolver(_type => [Reservation], {
    nullable: false
  })
  async reservations(@TypeGraphQL.Root() office: Office, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OfficeReservationsArgs): Promise<Reservation[]> {
    return getPrismaFromContext(ctx).office.findUnique({
      where: {
        id: office.id,
      },
    }).reservations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookableItem], {
    nullable: false
  })
  async bookableItems(@TypeGraphQL.Root() office: Office, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OfficeBookableItemsArgs): Promise<BookableItem[]> {
    return getPrismaFromContext(ctx).office.findUnique({
      where: {
        id: office.id,
      },
    }).bookableItems(args);
  }

  @TypeGraphQL.FieldResolver(_type => [OfficeManager], {
    nullable: false
  })
  async officeManagers(@TypeGraphQL.Root() office: Office, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OfficeOfficeManagersArgs): Promise<OfficeManager[]> {
    return getPrismaFromContext(ctx).office.findUnique({
      where: {
        id: office.id,
      },
    }).officeManagers(args);
  }
}
