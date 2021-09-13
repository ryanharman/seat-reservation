import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyOfficeArgs } from "./args/FindManyOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class FindManyOfficeResolver {
  @TypeGraphQL.Query(_returns => [Office], {
    nullable: false
  })
  async offices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOfficeArgs): Promise<Office[]> {
    return getPrismaFromContext(ctx).office.findMany(args);
  }
}
