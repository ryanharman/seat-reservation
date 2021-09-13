import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateWithoutOfficesInput } from "../inputs/BuildingCreateWithoutOfficesInput";
import { BuildingWhereUniqueInput } from "../inputs/BuildingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingCreateOrConnectWithoutOfficesInput {
  @TypeGraphQL.Field(_type => BuildingWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BuildingCreateWithoutOfficesInput, {
    nullable: false
  })
  create!: BuildingCreateWithoutOfficesInput;
}
