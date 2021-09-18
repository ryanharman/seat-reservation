import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOfficeManagerInput } from "../inputs/UserCreateOrConnectWithoutOfficeManagerInput";
import { UserCreateWithoutOfficeManagerInput } from "../inputs/UserCreateWithoutOfficeManagerInput";
import { UserUpdateWithoutOfficeManagerInput } from "../inputs/UserUpdateWithoutOfficeManagerInput";
import { UserUpsertWithoutOfficeManagerInput } from "../inputs/UserUpsertWithoutOfficeManagerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOfficeManagerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOfficeManagerInput, {
    nullable: true
  })
  create?: UserCreateWithoutOfficeManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOfficeManagerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOfficeManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOfficeManagerInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOfficeManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOfficeManagerInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOfficeManagerInput | undefined;
}
