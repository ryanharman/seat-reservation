import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeScalarWhereInput } from "../inputs/OfficeScalarWhereInput";
import { OfficeUpdateManyMutationInput } from "../inputs/OfficeUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateManyWithWhereWithoutBuildingInput {
  @TypeGraphQL.Field(_type => OfficeScalarWhereInput, {
    nullable: false
  })
  where!: OfficeScalarWhereInput;

  @TypeGraphQL.Field(_type => OfficeUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfficeUpdateManyMutationInput;
}
