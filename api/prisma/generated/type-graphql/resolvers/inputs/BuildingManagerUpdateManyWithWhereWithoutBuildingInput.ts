import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerScalarWhereInput } from "../inputs/BuildingManagerScalarWhereInput";
import { BuildingManagerUpdateManyMutationInput } from "../inputs/BuildingManagerUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerUpdateManyWithWhereWithoutBuildingInput {
  @TypeGraphQL.Field(_type => BuildingManagerScalarWhereInput, {
    nullable: false
  })
  where!: BuildingManagerScalarWhereInput;

  @TypeGraphQL.Field(_type => BuildingManagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: BuildingManagerUpdateManyMutationInput;
}
