import * as TypeGraphQL from "type-graphql";

export enum Role {
  USER = "USER",
  OFFICE_MANAGER = "OFFICE_MANAGER",
  BUILDING_MANAGER = "BUILDING_MANAGER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
