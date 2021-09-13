import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateManyOfficeInput } from "../inputs/OfficeManagerCreateManyOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateManyOfficeInputEnvelope {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateManyOfficeInput], {
    nullable: false
  })
  data!: OfficeManagerCreateManyOfficeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
