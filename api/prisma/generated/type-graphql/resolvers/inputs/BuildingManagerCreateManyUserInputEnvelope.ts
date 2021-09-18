import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateManyUserInput } from "../inputs/BuildingManagerCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateManyUserInput], {
    nullable: false
  })
  data!: BuildingManagerCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
