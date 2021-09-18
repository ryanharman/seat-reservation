import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateWithoutUserInput } from "../inputs/BuildingManagerCreateWithoutUserInput";
import { BuildingManagerUpdateWithoutUserInput } from "../inputs/BuildingManagerUpdateWithoutUserInput";
import { BuildingManagerWhereUniqueInput } from "../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BuildingManagerWhereUniqueInput, {
    nullable: false
  })
  where!: BuildingManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => BuildingManagerUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BuildingManagerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BuildingManagerCreateWithoutUserInput, {
    nullable: false
  })
  create!: BuildingManagerCreateWithoutUserInput;
}
