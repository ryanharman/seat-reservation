import * as TypeGraphQL from "type-graphql";

export enum OfficeManagerScalarFieldEnum {
  id = "id",
  officeId = "officeId",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OfficeManagerScalarFieldEnum, {
  name: "OfficeManagerScalarFieldEnum",
  description: undefined,
});
