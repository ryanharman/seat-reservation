import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOfficeArgs } from "./args/FindUniqueOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class FindUniqueOfficeResolver {
  @TypeGraphQL.Query(_returns => Office, {
    nullable: true
  })
  async office(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.findUnique(args);
  }
}
