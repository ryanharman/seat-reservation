import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBookableItemTypesArgs } from "./args/FindFirstBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class FindFirstBookableItemTypesResolver {
  @TypeGraphQL.Query(_returns => BookableItemTypes, {
    nullable: true
  })
  async findFirstBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.findFirst(args);
  }
}
