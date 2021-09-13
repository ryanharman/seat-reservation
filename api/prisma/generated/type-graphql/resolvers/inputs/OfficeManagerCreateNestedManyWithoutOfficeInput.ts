import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerCreateManyOfficeInputEnvelope } from "../inputs/OfficeManagerCreateManyOfficeInputEnvelope";
import { OfficeManagerCreateOrConnectWithoutOfficeInput } from "../inputs/OfficeManagerCreateOrConnectWithoutOfficeInput";
import { OfficeManagerCreateWithoutOfficeInput } from "../inputs/OfficeManagerCreateWithoutOfficeInput";
import { OfficeManagerWhereUniqueInput } from "../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeManagerCreateNestedManyWithoutOfficeInput {
  @TypeGraphQL.Field(_type => [OfficeManagerCreateWithoutOfficeInput], {
    nullable: true
  })
  create?: OfficeManagerCreateWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerCreateOrConnectWithoutOfficeInput], {
    nullable: true
  })
  connectOrCreate?: OfficeManagerCreateOrConnectWithoutOfficeInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerCreateManyOfficeInputEnvelope, {
    nullable: true
  })
  createMany?: OfficeManagerCreateManyOfficeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: OfficeManagerWhereUniqueInput[] | undefined;
}
