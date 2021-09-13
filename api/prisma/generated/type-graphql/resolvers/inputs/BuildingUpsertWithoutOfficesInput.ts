import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateWithoutOfficesInput } from "../inputs/BuildingCreateWithoutOfficesInput";
import { BuildingUpdateWithoutOfficesInput } from "../inputs/BuildingUpdateWithoutOfficesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingUpsertWithoutOfficesInput {
  @TypeGraphQL.Field(_type => BuildingUpdateWithoutOfficesInput, {
    nullable: false
  })
  update!: BuildingUpdateWithoutOfficesInput;

  @TypeGraphQL.Field(_type => BuildingCreateWithoutOfficesInput, {
    nullable: false
  })
  create!: BuildingCreateWithoutOfficesInput;
}
