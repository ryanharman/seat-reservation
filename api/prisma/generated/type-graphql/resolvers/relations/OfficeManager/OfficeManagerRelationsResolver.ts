import * as TypeGraphQL from "type-graphql";
import { Office } from "../../../models/Office";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class OfficeManagerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Office, {
    nullable: false
  })
  async office(@TypeGraphQL.Root() officeManager: OfficeManager, @TypeGraphQL.Ctx() ctx: any): Promise<Office> {
    return getPrismaFromContext(ctx).officeManager.findUnique({
      where: {
        id: officeManager.id,
      },
    }).office({});
  }
}
