import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOfficeArgs } from "./args/AggregateOfficeArgs";
import { Office } from "../../../models/Office";
import { AggregateOffice } from "../../outputs/AggregateOffice";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Office)
export class AggregateOfficeResolver {
  @TypeGraphQL.Query(_returns => AggregateOffice, {
    nullable: false
  })
  async aggregateOffice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfficeArgs): Promise<AggregateOffice> {
    return getPrismaFromContext(ctx).office.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
