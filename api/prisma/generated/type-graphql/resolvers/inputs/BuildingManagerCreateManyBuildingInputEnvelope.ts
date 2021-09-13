import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateManyBuildingInput } from "../inputs/BuildingManagerCreateManyBuildingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerCreateManyBuildingInputEnvelope {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateManyBuildingInput], {
    nullable: false
  })
  data!: BuildingManagerCreateManyBuildingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
