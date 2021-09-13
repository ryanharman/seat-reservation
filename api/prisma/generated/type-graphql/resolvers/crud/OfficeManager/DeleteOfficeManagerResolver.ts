import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOfficeManagerArgs } from "./args/DeleteOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class DeleteOfficeManagerResolver {
  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: true
  })
  async deleteOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.delete(args);
  }
}
