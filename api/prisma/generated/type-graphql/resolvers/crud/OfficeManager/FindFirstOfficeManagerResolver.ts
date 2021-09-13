import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstOfficeManagerArgs } from "./args/FindFirstOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class FindFirstOfficeManagerResolver {
  @TypeGraphQL.Query(_returns => OfficeManager, {
    nullable: true
  })
  async findFirstOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOfficeManagerArgs): Promise<OfficeManager | null> {
    return getPrismaFromContext(ctx).officeManager.findFirst(args);
  }
}
