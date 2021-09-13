import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyOfficeManagerArgs } from "./args/FindManyOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class FindManyOfficeManagerResolver {
  @TypeGraphQL.Query(_returns => [OfficeManager], {
    nullable: false
  })
  async officeManagers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOfficeManagerArgs): Promise<OfficeManager[]> {
    return getPrismaFromContext(ctx).officeManager.findMany(args);
  }
}
