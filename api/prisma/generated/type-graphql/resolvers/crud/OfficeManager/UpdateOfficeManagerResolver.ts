import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOfficeManagerArgs } from "./args/UpdateOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class UpdateOfficeManagerResolver {
  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: true
  })
  async updateOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.update(args);
  }
}
