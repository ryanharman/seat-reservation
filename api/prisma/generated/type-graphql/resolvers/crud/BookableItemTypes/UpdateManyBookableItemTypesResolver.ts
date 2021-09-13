import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBookableItemTypesArgs } from "./args/UpdateManyBookableItemTypesArgs";
import { BookableItemTypes } from "../../../models/BookableItemTypes";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookableItemTypes)
export class UpdateManyBookableItemTypesResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBookableItemTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBookableItemTypesArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookableItemTypes.updateMany(args);
  }
}
