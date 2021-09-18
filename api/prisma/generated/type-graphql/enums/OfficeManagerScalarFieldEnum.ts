import * as TypeGraphQL from "type-graphql";

export enum OfficeManagerScalarFieldEnum {
  id = "id",
  officeId = "officeId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OfficeManagerScalarFieldEnum, {
  name: "OfficeManagerScalarFieldEnum",
  description: undefined,
});
