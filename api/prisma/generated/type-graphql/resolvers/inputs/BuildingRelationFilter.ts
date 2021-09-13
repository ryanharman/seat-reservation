import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingWhereInput } from "../inputs/BuildingWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingRelationFilter {
  @TypeGraphQL.Field(_type => BuildingWhereInput, {
    nullable: true
  })
  is?: BuildingWhereInput | undefined;

  @TypeGraphQL.Field(_type => BuildingWhereInput, {
    nullable: true
  })
  isNot?: BuildingWhereInput | undefined;
}
