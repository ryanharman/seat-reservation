import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteBookableItemTypesArgs } from "./args/DeleteBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class DeleteBookableItemTypesResolver {
  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: true
  })
  async deleteBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.delete(args);
  }
}
