import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyBookableItemTypesArgs } from "./args/FindManyBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class FindManyBookableItemTypesResolver {
  @TypeGraphQL.Query(_returns => [BookableItemTypes], {
    nullable: false
  })
  async findManyBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBookableItemTypesArgs): Promise<BookableItemTypes[]> {
    return getPrismaFromContext(ctx).bookableItemTypes.findMany(args);
  }
}
