import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingCreateNestedOneWithoutOfficesInput } from "../inputs/BuildingCreateNestedOneWithoutOfficesInput";
import { OfficeManagerCreateNestedManyWithoutOfficeInput } from "../inputs/OfficeManagerCreateNestedManyWithoutOfficeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OfficeCreateWithoutBookableItemsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BuildingCreateNestedOneWithoutOfficesInput, {
    nullable: false
  })
  building!: BuildingCreateNestedOneWithoutOfficesInput;

  @TypeGraphQL.Field(_type => OfficeManagerCreateNestedManyWithoutOfficeInput, {
    nullable: true
  })
  officeManagers?: OfficeManagerCreateNestedManyWithoutOfficeInput | undefined;
}
