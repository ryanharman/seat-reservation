import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateManyUserInputEnvelope } from "../inputs/OfficeManagerCreateManyUserInputEnvelope";
import { OfficeManagerCreateOrConnectWithoutUserInput } from "../inputs/OfficeManagerCreateOrConnectWithoutUserInput";
import { OfficeManagerCreateWithoutUserInput } from "../inputs/OfficeManagerCreateWithoutUserInput";
import { OfficeManagerWhereUniqueInput } from "../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateWithoutUserInput], {
    nullable: true
  })
  create?: OfficeManagerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: OfficeManagerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: OfficeManagerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: OfficeManagerWhereUniqueInput[] | undefined;
}
