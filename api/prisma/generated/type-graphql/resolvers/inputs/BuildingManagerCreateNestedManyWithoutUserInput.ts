import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateManyUserInputEnvelope } from "../inputs/BuildingManagerCreateManyUserInputEnvelope";
import { BuildingManagerCreateOrConnectWithoutUserInput } from "../inputs/BuildingManagerCreateOrConnectWithoutUserInput";
import { BuildingManagerCreateWithoutUserInput } from "../inputs/BuildingManagerCreateWithoutUserInput";
import { BuildingManagerWhereUniqueInput } from "../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateWithoutUserInput], {
    nullable: true
  })
  create?: BuildingManagerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BuildingManagerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BuildingManagerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: BuildingManagerWhereUniqueInput[] | undefined;
}
