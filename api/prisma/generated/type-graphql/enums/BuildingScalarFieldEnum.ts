import * as TypeGraphQL from "type-graphql";

export enum BuildingScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BuildingScalarFieldEnum, {
  name: "BuildingScalarFieldEnum",
  description: undefined,
});
