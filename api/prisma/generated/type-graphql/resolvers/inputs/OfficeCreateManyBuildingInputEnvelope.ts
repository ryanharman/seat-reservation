import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateManyBuildingInput } from "../inputs/OfficeCreateManyBuildingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateManyBuildingInputEnvelope {
  @TypeGraphQL.Field(_type => [OfficeCreateManyBuildingInput], {
    nullable: false
  })
  data!: OfficeCreateManyBuildingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
