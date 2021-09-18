import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateNestedOneWithoutOfficeManagersInput } from "../inputs/OfficeCreateNestedOneWithoutOfficeManagersInput";
import { UserCreateNestedOneWithoutOfficeManagerInput } from "../inputs/UserCreateNestedOneWithoutOfficeManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOfficeManagerInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutOfficeManagerInput;
}
