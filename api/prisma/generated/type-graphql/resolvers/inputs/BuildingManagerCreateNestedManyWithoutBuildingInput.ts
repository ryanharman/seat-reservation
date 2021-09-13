import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerCreateManyBuildingInputEnvelope } from "../inputs/BuildingManagerCreateManyBuildingInputEnvelope";
import { BuildingManagerCreateOrConnectWithoutBuildingInput } from "../inputs/BuildingManagerCreateOrConnectWithoutBuildingInput";
import { BuildingManagerCreateWithoutBuildingInput } from "../inputs/BuildingManagerCreateWithoutBuildingInput";
import { BuildingManagerWhereUniqueInput } from "../inputs/BuildingManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingManagerCreateNestedManyWithoutBuildingInput {
  @TypeGraphQL.Field(_type => [BuildingManagerCreateWithoutBuildingInput], {
    nullable: true
  })
  create?: BuildingManagerCreateWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerCreateOrConnectWithoutBuildingInput], {
    nullable: true
  })
  connectOrCreate?: BuildingManagerCreateOrConnectWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => BuildingManagerCreateManyBuildingInputEnvelope, {
    nullable: true
  })
  createMany?: BuildingManagerCreateManyBuildingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BuildingManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: BuildingManagerWhereUniqueInput[] | undefined;
}
