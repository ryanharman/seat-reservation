import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateNestedOneWithoutOfficeManagersInput } from "../inputs/OfficeCreateNestedOneWithoutOfficeManagersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateInput {
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

  @TypeGraphQL.Field(_type => OfficeCreateNestedOneWithoutOfficeManagersInput, {
    nullable: false
  })
  office!: OfficeCreateNestedOneWithoutOfficeManagersInput;
}
