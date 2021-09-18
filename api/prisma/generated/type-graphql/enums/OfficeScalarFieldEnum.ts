import * as TypeGraphQL from "type-graphql";

export enum OfficeScalarFieldEnum {
  id = "id",
  buildingId = "buildingId",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OfficeScalarFieldEnum, {
  name: "OfficeScalarFieldEnum",
  description: undefined,
});
