import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateManyOfficeManagerArgs } from "./args/CreateManyOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class CreateManyOfficeManagerResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOfficeManagerArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).officeManager.createMany(args);
  }
}
