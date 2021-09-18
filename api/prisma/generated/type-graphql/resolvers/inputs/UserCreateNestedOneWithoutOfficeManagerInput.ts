import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOfficeManagerInput } from "../inputs/UserCreateOrConnectWithoutOfficeManagerInput";
import { UserCreateWithoutOfficeManagerInput } from "../inputs/UserCreateWithoutOfficeManagerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutOfficeManagerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOfficeManagerInput, {
    nullable: true
  })
  create?: UserCreateWithoutOfficeManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOfficeManagerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOfficeManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
