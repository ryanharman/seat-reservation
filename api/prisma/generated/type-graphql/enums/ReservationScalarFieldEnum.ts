import * as TypeGraphQL from "type-graphql";

export enum ReservationScalarFieldEnum {
  id = "id",
  userId = "userId",
  bookedItemId = "bookedItemId",
  dateBookedFrom = "dateBookedFrom",
  dateBookedTo = "dateBookedTo",
  cancelled = "cancelled",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ReservationScalarFieldEnum, {
  name: "ReservationScalarFieldEnum",
  description: undefined,
});
