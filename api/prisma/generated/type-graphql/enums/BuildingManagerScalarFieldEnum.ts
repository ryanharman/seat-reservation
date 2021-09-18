import * as TypeGraphQL from "type-graphql";

export enum BuildingManagerScalarFieldEnum {
  id = "id",
  buildingId = "buildingId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BuildingManagerScalarFieldEnum, {
  name: "BuildingManagerScalarFieldEnum",
  description: undefined,
});
