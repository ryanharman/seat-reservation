import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateBookableItemTypesArgs } from "./args/UpdateBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class UpdateBookableItemTypesResolver {
  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: true
  })
  async updateBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBookableItemTypesArgs): Promise<BookableItemTypes | null> {
    return getPrismaFromContext(ctx).bookableItemTypes.update(args);
  }
}
