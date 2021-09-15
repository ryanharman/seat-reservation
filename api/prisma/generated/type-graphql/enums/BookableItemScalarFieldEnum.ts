import * as TypeGraphQL from "type-graphql";

export enum BookableItemScalarFieldEnum {
  id = "id",
  officeId = "officeId",
  typeId = "typeId",
  name = "name",
  officeExclusive = "officeExclusive",
  available = "available",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BookableItemScalarFieldEnum, {
  name: "BookableItemScalarFieldEnum",
  description: undefined,
});
