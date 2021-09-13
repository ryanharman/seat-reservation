import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerWhereInput } from "../inputs/BuildingManagerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerListRelationFilter {
  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  every?: BuildingManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  some?: BuildingManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerWhereInput, {
    nullable: true
  })
  none?: BuildingManagerWhereInput | undefined;
}
