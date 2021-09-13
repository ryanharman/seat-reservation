import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateNestedManyWithoutBuildingInput } from "../inputs/BuildingManagerCreateNestedManyWithoutBuildingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingCreateWithoutOfficesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerCreateNestedManyWithoutBuildingInput, {
    nullable: true
  })
  buildingManagers?: BuildingManagerCreateNestedManyWithoutBuildingInput | undefined;
}
