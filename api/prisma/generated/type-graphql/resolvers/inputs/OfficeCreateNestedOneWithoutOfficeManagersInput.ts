import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateOrConnectWithoutOfficeManagersInput } from "../inputs/OfficeCreateOrConnectWithoutOfficeManagersInput";
import { OfficeCreateWithoutOfficeManagersInput } from "../inputs/OfficeCreateWithoutOfficeManagersInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateNestedOneWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => OfficeCreateWithoutOfficeManagersInput, {
    nullable: true
  })
  create?: OfficeCreateWithoutOfficeManagersInput | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateOrConnectWithoutOfficeManagersInput, {
    nullable: true
  })
  connectOrCreate?: OfficeCreateOrConnectWithoutOfficeManagersInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: true
  })
  connect?: OfficeWhereUniqueInput | undefined;
}
