import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBuildingManagerInput } from "../inputs/UserCreateOrConnectWithoutBuildingManagerInput";
import { UserCreateWithoutBuildingManagerInput } from "../inputs/UserCreateWithoutBuildingManagerInput";
import { UserUpdateWithoutBuildingManagerInput } from "../inputs/UserUpdateWithoutBuildingManagerInput";
import { UserUpsertWithoutBuildingManagerInput } from "../inputs/UserUpsertWithoutBuildingManagerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBuildingManagerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBuildingManagerInput, {
    nullable: true
  })
  create?: UserCreateWithoutBuildingManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBuildingManagerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBuildingManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBuildingManagerInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBuildingManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBuildingManagerInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBuildingManagerInput | undefined;
}
