import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookableItemTypesArgs } from "./args/AggregateBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { AggregateBookableItemTypes } from "../../outputs/AggregateBookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class AggregateBookableItemTypesResolver {
  @TypeGraphQL.Query(_returns => AggregateBookableItemTypes, {
    nullable: false
  })
  async aggregateBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookableItemTypesArgs): Promise<AggregateBookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItemTypes.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
