import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOfficeArgs } from "./args/CreateOfficeArgs";
import { Office } from "../../../models/Office";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class CreateOfficeResolver {
  @TypeGraphQL.Mutation(_returns => Office, {
    nullable: false
  })
  async createOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOfficeArgs): Promise<Office> {
    return getPrismaFromContext(ctx).office.create(args);
  }
}
