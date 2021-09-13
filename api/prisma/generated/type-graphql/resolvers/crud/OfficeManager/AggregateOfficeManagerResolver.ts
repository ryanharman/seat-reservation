import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOfficeManagerArgs } from "./args/AggregateOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { AggregateOfficeManager } from "../../outputs/AggregateOfficeManager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class AggregateOfficeManagerResolver {
  @TypeGraphQL.Query(_returns => AggregateOfficeManager, {
    nullable: false
  })
  async aggregateOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfficeManagerArgs): Promise<AggregateOfficeManager> {
    return getPrismaFromContext(ctx).officeManager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
