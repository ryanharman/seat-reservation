import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookableItemTypesArgs } from "./args/FindUniqueBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class FindUniqueBookableItemTypesResolver {
  @TypeGraphQL.Query(_returns => BookableItemTypes, {
    nullable: true
  })
  async findUniqueBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.findUnique(args);
  }
}
