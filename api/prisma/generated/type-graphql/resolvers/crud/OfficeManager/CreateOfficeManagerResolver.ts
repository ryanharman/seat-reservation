import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOfficeManagerArgs } from "./args/CreateOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class CreateOfficeManagerResolver {
  @TypeGraphQL.Mutation(_returns => OfficeManager, {
    nullable: false
  })
  async createOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOfficeManagerArgs): Promise<OfficeManager> {
    return getPrismaFromContext(ctx).officeManager.create(args);
  }
}
