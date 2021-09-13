import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOfficeManagerArgs } from "./args/FindUniqueOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class FindUniqueOfficeManagerResolver {
  @TypeGraphQL.Query(_returns => OfficeManager, {
    nullable: true
  })
  async officeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.findUnique(args);
  }
}
