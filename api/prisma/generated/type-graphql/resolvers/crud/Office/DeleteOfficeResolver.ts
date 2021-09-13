import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOfficeArgs } from "./args/DeleteOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class DeleteOfficeResolver {
  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: true
  })
  async deleteOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.delete(args);
  }
}
