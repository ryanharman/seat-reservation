import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateManyBuildingInputEnvelope } from "../inputs/OfficeCreateManyBuildingInputEnvelope";
import { OfficeCreateOrConnectWithoutBuildingInput } from "../inputs/OfficeCreateOrConnectWithoutBuildingInput";
import { OfficeCreateWithoutBuildingInput } from "../inputs/OfficeCreateWithoutBuildingInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateNestedManyWithoutBuildingInput {
  @TypeGraphQL.Field(_type => [OfficeCreateWithoutBuildingInput], {
    nullable: true
  })
  create?: OfficeCreateWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeCreateOrConnectWithoutBuildingInput], {
    nullable: true
  })
  connectOrCreate?: OfficeCreateOrConnectWithoutBuildingInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateManyBuildingInputEnvelope, {
    nullable: true
  })
  createMany?: OfficeCreateManyBuildingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfficeWhereUniqueInput], {
    nullable: true
  })
  connect?: OfficeWhereUniqueInput[] | undefined;
}
