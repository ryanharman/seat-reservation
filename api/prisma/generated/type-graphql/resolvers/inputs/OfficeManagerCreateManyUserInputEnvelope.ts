import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateManyUserInput } from "../inputs/OfficeManagerCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateManyUserInput], {
    nullable: false
  })
  data!: OfficeManagerCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
