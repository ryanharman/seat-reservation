import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerScalarWhereInput } from "../inputs/OfficeManagerScalarWhereInput";
import { OfficeManagerUpdateManyMutationInput } from "../inputs/OfficeManagerUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerUpdateManyWithWhereWithoutOfficeInput {
  @TypeGraphQL.Field(_type => OfficeManagerScalarWhereInput, {
    nullable: false
  })
  where!: OfficeManagerScalarWhereInput;

  @TypeGraphQL.Field(_type => OfficeManagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfficeManagerUpdateManyMutationInput;
}
