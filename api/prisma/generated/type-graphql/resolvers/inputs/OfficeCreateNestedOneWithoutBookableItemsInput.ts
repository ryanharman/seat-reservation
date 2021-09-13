import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeCreateOrConnectWithoutBookableItemsInput } from "../inputs/OfficeCreateOrConnectWithoutBookableItemsInput";
import { OfficeCreateWithoutBookableItemsInput } from "../inputs/OfficeCreateWithoutBookableItemsInput";
import { OfficeWhereUniqueInput } from "../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateNestedOneWithoutBookableItemsInput {
  @TypeGraphQL.Field(_type => OfficeCreateWithoutBookableItemsInput, {
    nullable: true
  })
  create?: OfficeCreateWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeCreateOrConnectWithoutBookableItemsInput, {
    nullable: true
  })
  connectOrCreate?: OfficeCreateOrConnectWithoutBookableItemsInput | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: true
  })
  connect?: OfficeWhereUniqueInput | undefined;
}
