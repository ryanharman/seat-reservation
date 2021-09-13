import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOfficeArgs } from "./args/UpdateOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class UpdateOfficeResolver {
  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: true
  })
  async updateOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOfficeArgs): Promise<Office | null> {
    return getPrismaFromContext(ctx).office.update(args);
  }
}
