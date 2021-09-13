import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBookableItemTypesArgs } from "./args/UpsertBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class UpsertBookableItemTypesResolver {
  @TypeGraphQL.Mutation(_returns => BookableItemTypes, {
    nullable: false
  })
  async upsertBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBookableItemTypesArgs): Promise<BookableItemTypes> {
    return getPrismaFromContext(ctx).bookableItemTypes.upsert(args);
  }
}
