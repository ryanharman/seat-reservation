import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByOfficeManagerArgs } from "./args/GroupByOfficeManagerArgs";
import { OfficeManager } from "../../../models/OfficeManager";
import { OfficeManagerGroupBy } from "../../outputs/OfficeManagerGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfficeManager)
export class GroupByOfficeManagerResolver {
  @TypeGraphQL.Query(_returns => [OfficeManagerGroupBy], {
    nullable: false
  })
  async groupByOfficeManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOfficeManagerArgs): Promise<OfficeManagerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).officeManager.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
