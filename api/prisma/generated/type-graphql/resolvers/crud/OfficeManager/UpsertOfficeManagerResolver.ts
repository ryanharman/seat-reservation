import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOfficeManagerArgs } from "./args/UpsertOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class UpsertOfficeManagerResolver {
  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: false
  })
  async upsertOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOfficeManagerArgs): Promise<OfficeManager> {
    return getPrismaFromContext(ctx).officeManager.upsert(args);
  }
}
