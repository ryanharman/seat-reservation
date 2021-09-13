import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOfficeArgs } from "./args/UpsertOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class UpsertOfficeResolver {
  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: false
  })
  async upsertOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOfficeArgs): Promise<Office> {
    return getPrismaFromContext(ctx).office.upsert(args);
  }
}
