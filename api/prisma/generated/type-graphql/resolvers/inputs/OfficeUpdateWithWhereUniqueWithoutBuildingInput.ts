import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeUpdateWithoutBuildingInput } from "../inputs/OfficeUpdateWithoutBuildingInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateWithWhereUniqueWithoutBuildingInput {
  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeUpdateWithoutBuildingInput, {
    nullable: false
  })
  data!: OfficeUpdateWithoutBuildingInput;
}
