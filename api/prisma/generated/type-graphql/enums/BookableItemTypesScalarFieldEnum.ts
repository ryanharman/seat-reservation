import * as TypeGraphQL from "type-graphql";

export enum BookableItemTypesScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BookableItemTypesScalarFieldEnum, {
  name: "BookableItemTypesScalarFieldEnum",
  description: undefined,
});
