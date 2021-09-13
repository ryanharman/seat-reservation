import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateBookableItemTypesArgs } from "./args/CreateBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class CreateBookableItemTypesResolver {
  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: false
  })
  async createBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBookableItemTypesArgs): Promise<BookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItemTypes.create(args);
  }
}
