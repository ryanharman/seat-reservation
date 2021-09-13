import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateOrConnectWithoutOfficeManagersInput } from "../inputs/OfficeCreateOrConnectWithoutOfficeManagersInput";
import { OfficeCreateWithoutOfficeManagersInput } from "../inputs/OfficeCreateWithoutOfficeManagersInput";
import { OfficeUpdateWithoutOfficeManagersInput } from "../inputs/OfficeUpdateWithoutOfficeManagersInput";
import { OfficeUpsertWithoutOfficeManagersInput } from "../inputs/OfficeUpsertWithoutOfficeManagersInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeUpdateOneRequiredWithoutOfficeManagersInput {
  @TypeGraphQL.Field(_type => OfficeCreateWithoutOfficeManagersInput, {
    nullable: true
  })
  create?: OfficeCreateWithoutOfficeManagersInput | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateOrConnectWithoutOfficeManagersInput, {
    nullable: true
  })
  connectOrCreate?: OfficeCreateOrConnectWithoutOfficeManagersInput | undefined;

  @TypeGraphQL.Field(_type => OfficeUpsertWithoutOfficeManagersInput, {
    nullable: true
  })
  upsert?: OfficeUpsertWithoutOfficeManagersInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: true
  })
  connect?: OfficeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OfficeUpdateWithoutOfficeManagersInput, {
    nullable: true
  })
  update?: OfficeUpdateWithoutOfficeManagersInput | undefined;
}
