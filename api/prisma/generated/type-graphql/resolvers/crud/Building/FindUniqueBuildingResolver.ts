import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBuildingArgs } from "./args/FindUniqueBuildingArgs";
import { Building } from "../../../models/Building";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Building)
export class FindUniqueBuildingResolver {
  @TypeGraphQL.Query(_returns => Building, {
    nullable: true
  })
  async building(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBuildingArgs): Promise<Building | null> {
    return getPrismaFromContext(ctx).building.findUnique(args);
  }
}
