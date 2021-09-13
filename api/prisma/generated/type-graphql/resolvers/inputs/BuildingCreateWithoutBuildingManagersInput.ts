import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateNestedManyWithoutBuildingInput } from "../inputs/OfficeCreateNestedManyWithoutBuildingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BuildingCreateWithoutBuildingManagersInput {
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

  @TypeGraphQL.Field(_type => OfficeCreateNestedManyWithoutBuildingInput, {
    nullable: true
  })
  offices?: OfficeCreateNestedManyWithoutBuildingInput | undefined;
}
