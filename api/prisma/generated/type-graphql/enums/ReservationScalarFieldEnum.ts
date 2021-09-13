import * as TypeGraphQL from "type-graphql";

export enum ReservationScalarFieldEnum {
  id = "id",
  userId = "userId",
  officeId = "officeId",
  bookedItemId = "bookedItemId",
  dateBookedFrom = "dateBookedFrom",
  dateBookedTo = "dateBookedTo",
  cancelled = "cancelled",
  password = "password",
  role = "role",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ReservationScalarFieldEnum, {
  name: "ReservationScalarFieldEnum",
  description: undefined,
});
