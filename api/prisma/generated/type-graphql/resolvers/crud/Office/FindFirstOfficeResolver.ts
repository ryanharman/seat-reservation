import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstOfficeArgs } from "./args/FindFirstOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class FindFirstOfficeResolver {
  @TypeGraphQL.Query(_returns => Office, {
    nullable: true
  })
  async findFirstOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.findFirst(args);
  }
}
