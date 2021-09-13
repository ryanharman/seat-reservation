import * as TypeGraphQL from "type-graphql";

export enum BuildingManagerScalarFieldEnum {
  id = "id",
  buildingId = "buildingId",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BuildingManagerScalarFieldEnum, {
  name: "BuildingManagerScalarFieldEnum",
  description: undefined,
});
